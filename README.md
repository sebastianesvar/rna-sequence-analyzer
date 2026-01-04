# 🧬 RNA Sequence Analyzer

A full-stack web application for analyzing RNA sequences, built with **FastAPI** (backend) and **React** (frontend). This tool provides comprehensive analysis including nucleotide composition, GC content calculation, reverse transcription to DNA, and protein translation.

![RNA Sequence Analyzer](https://img.shields.io/badge/Python-3.10+-blue.svg)
![FastAPI](https://img.shields.io/badge/FastAPI-0.104-green.svg)
![React](https://img.shields.io/badge/React-18-blue.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## 🌟 Features

- **RNA Sequence Validation**: Ensures sequences contain only valid nucleotides (A, C, G, U)
- **GC Content Calculation**: Computes the percentage of G and C nucleotides
- **Nucleotide Composition Analysis**: Provides detailed breakdown of each nucleotide
- **Reverse Transcription**: Converts RNA sequences to DNA
- **Protein Translation**: Translates RNA to protein sequences using the standard genetic code
- **Interactive Visualizations**: Bar charts showing nucleotide composition
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## ��️ Tech Stack

### Backend
- **FastAPI**: Modern Python web framework for building APIs
- **Biopython**: Bioinformatics library for sequence analysis
- **Pandas**: Data manipulation and analysis
- **Uvicorn**: ASGI server for production deployment

### Frontend
- **React**: JavaScript library for building user interfaces
- **Vite**: Next-generation frontend tooling
- **Tailwind CSS**: Utility-first CSS framework
- **Recharts**: Composable charting library
- **Axios**: HTTP client for API requests
- **Lucide React**: Beautiful icon library

## �� Getting Started

### Prerequisites

- Python 3.10+
- Node.js 16+
- npm or yarn

### Backend Setup

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/rna-sequence-analyzer.git
cd rna-sequence-analyzer
```

2. Set up Python virtual environment:
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the API server:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8001
```

The API will be available at `http://localhost:8001`
API documentation (Swagger): `http://localhost:8001/docs`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd ../frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📖 API Endpoints

### `POST /api/v1/analyze`
Complete analysis of an RNA sequence
- **Input**: `{ "sequence": "AUGCUAGCUAG" }`
- **Output**: Full analysis including all metrics

### `POST /api/v1/gc-content`
Calculate GC content percentage

### `POST /api/v1/composition`
Get nucleotide composition breakdown

### `POST /api/v1/reverse-transcribe`
Convert RNA to DNA sequence

### `POST /api/v1/translate`
Translate RNA to protein sequence

## �� Example Usage

1. Open the application in your browser
2. Click "Cargar Ejemplo" to load a sample RNA sequence
3. Click "Analizar Secuencia" to run the analysis
4. View the results including:
   - Sequence length
   - GC content percentage
   - Nucleotide composition with interactive charts
   - Reverse-transcribed DNA sequence
   - Translated protein sequence

## 🧪 Sample Sequences

Try these example RNA sequences:

- **Simple sequence**: `AUGUGCAACGUAACGAAUAA`
- **With stop codon**: `AUGCCCUAA`
- **Longer sequence**: `AUGGCCAUGGCGCCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA`

## 🎯 Future Enhancements

- [ ] Support for batch sequence processing
- [ ] Export results to CSV/JSON
- [ ] Support for FASTA file uploads
- [ ] Secondary structure prediction
- [ ] ORF (Open Reading Frame) detection
- [ ] Multiple sequence alignment
- [ ] Integration with NCBI databases

## 👨‍💻 About the Developer

Biologist with a Master's in Biological Sciences transitioning to software development. This project combines my background in molecular biology with modern web development technologies, showcasing skills in:

- Full-stack development (Python/FastAPI + React)
- Bioinformatics and computational biology
- API design and documentation
- Data visualization
- Responsive UI/UX design

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/sebastianesvar/rna-sequence-analyzer/issues).

## 📧 Contact

- GitHub: [sebastianesvar] (https://github.com/sebastianesvar)
- LinkedIn: [Sebastián Escobar Vargas](https://linkedin.com/in/sebastián-escobar-vargas-/)
- Email: la.pina.software@gmail.com

---

⭐ If you found this project helpful, please give it a star!

