from fastapi import APIRouter, HTTPException
from app.models.schemas import (
    RNASequenceInput, 
    AnalysisResult,
    GCContentResult,
    NucleotideCompositionResult
)
from app.services.rna_analyzer import RNAAnalyzer

router = APIRouter(prefix="/api/v1", tags=["RNA Analysis"])

@router.post("/analyze", response_model=AnalysisResult)
async def analyze_sequence(data: RNASequenceInput):
    """
    Análisis completo de una secuencia de ARN:
    - Longitud de la secuencia
    - Contenido GC
    - Composición de nucleótidos
    - Transcripción inversa a ADN
    - Traducción a proteína
    """
    try:
        result = RNAAnalyzer.analyze_sequence(data.sequence)
        
        if "error" in result:
            raise HTTPException(status_code=400, detail=result["error"])
        
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/gc-content", response_model=GCContentResult)
async def calculate_gc_content(data: RNASequenceInput):
    """
    Calcula el contenido GC de la secuencia de ARN.
    El contenido GC es el porcentaje de nucleótidos G y C en la secuencia.
    """
    try:
        gc_content = RNAAnalyzer.calculate_gc_content(data.sequence)
        return {
            "sequence": data.sequence,
            "gc_content": gc_content
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/composition", response_model=NucleotideCompositionResult)
async def get_composition(data: RNASequenceInput):
    """
    Obtiene la composición de nucleótidos de la secuencia de ARN.
    Retorna el conteo de cada nucleótido (A, C, G, U).
    """
    try:
        composition = RNAAnalyzer.get_nucleotide_composition(data.sequence)
        return {
            "sequence": data.sequence,
            "composition": composition,
            "total_nucleotides": len(data.sequence)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/reverse-transcribe")
async def reverse_transcribe(data: RNASequenceInput):
    """
    Realiza la transcripción inversa de ARN a ADN.
    Convierte U → T
    """
    try:
        dna_sequence = RNAAnalyzer.reverse_transcribe(data.sequence)
        return {
            "rna_sequence": data.sequence,
            "dna_sequence": dna_sequence
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/translate")
async def translate_to_protein(data: RNASequenceInput):
    """
    Traduce la secuencia de ARN a proteína usando el código genético estándar.
    La traducción se detiene en el primer codón de parada.
    """
    try:
        protein = RNAAnalyzer.translate_to_protein(data.sequence)
        return {
            "rna_sequence": data.sequence,
            "protein_sequence": protein,
            "protein_length": len(protein) if not protein.startswith("Error") else 0
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
