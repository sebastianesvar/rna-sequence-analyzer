from Bio.Seq import Seq
from typing import Dict, List

class RNAAnalyzer:
    """Clase para analizar secuencias de ARN"""
    
    @staticmethod
    def validate_rna_sequence(sequence: str) -> bool:
        """Valida que la secuencia solo contenga nucleótidos válidos de ARN (A, C, G, U)"""
        valid_nucleotides = set('ACGU')
        return all(nucleotide.upper() in valid_nucleotides for nucleotide in sequence)
    
    @staticmethod
    def calculate_gc_content(sequence: str) -> float:
        """Calcula el contenido GC de la secuencia"""
        sequence = sequence.upper()
        g_count = sequence.count('G')
        c_count = sequence.count('C')
        total = len(sequence)
        
        if total == 0:
            return 0.0
        
        return round((g_count + c_count) / total * 100, 2)
    
    @staticmethod
    def get_nucleotide_composition(sequence: str) -> Dict[str, int]:
        """Retorna la composición de nucleótidos"""
        sequence = sequence.upper()
        return {
            'A': sequence.count('A'),
            'C': sequence.count('C'),
            'G': sequence.count('G'),
            'U': sequence.count('U')
        }
    
    @staticmethod
    def reverse_transcribe(sequence: str) -> str:
        """Convierte ARN a ADN (transcripción inversa)"""
        rna_seq = Seq(sequence.upper())
        dna_seq = rna_seq.back_transcribe()
        return str(dna_seq)
    
    @staticmethod
    def translate_to_protein(sequence: str) -> str:
        """Traduce la secuencia de ARN a proteína"""
        try:
            rna_seq = Seq(sequence.upper())
            protein = rna_seq.translate(to_stop=True)
            return str(protein)
        except Exception as e:
            return f"Error en la traducción: {str(e)}"
    
    @staticmethod
    def analyze_sequence(sequence: str) -> Dict:
        """Análisis completo de la secuencia"""
        if not RNAAnalyzer.validate_rna_sequence(sequence):
            return {
                "error": "Secuencia inválida. Solo se permiten nucleótidos A, C, G, U"
            }
        
        return {
            "sequence_length": len(sequence),
            "gc_content": RNAAnalyzer.calculate_gc_content(sequence),
            "nucleotide_composition": RNAAnalyzer.get_nucleotide_composition(sequence),
            "reverse_transcribed_dna": RNAAnalyzer.reverse_transcribe(sequence),
            "protein_translation": RNAAnalyzer.translate_to_protein(sequence)
        }
