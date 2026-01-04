from pydantic import BaseModel, Field, validator
from typing import Dict

class RNASequenceInput(BaseModel):
    sequence: str = Field(..., description="Secuencia de ARN (solo A, C, G, U)")
    
    @validator('sequence')
    def validate_sequence(cls, v):
        # Remover espacios y convertir a mayúsculas
        v = v.replace(" ", "").replace("\n", "").upper()
        
        if not v:
            raise ValueError("La secuencia no puede estar vacía")
        
        valid_nucleotides = set('ACGU')
        invalid_chars = set(v) - valid_nucleotides
        
        if invalid_chars:
            raise ValueError(
                f"Caracteres inválidos encontrados: {', '.join(invalid_chars)}. "
                "Solo se permiten A, C, G, U"
            )
        
        return v

    class Config:
        json_schema_extra = {
            "example": {
                "sequence": "AUGCUAGCUAGCUAG"
            }
        }

class AnalysisResult(BaseModel):
    sequence_length: int
    gc_content: float
    nucleotide_composition: Dict[str, int]
    reverse_transcribed_dna: str
    protein_translation: str

class GCContentResult(BaseModel):
    sequence: str
    gc_content: float
    
class NucleotideCompositionResult(BaseModel):
    sequence: str
    composition: Dict[str, int]
    total_nucleotides: int
