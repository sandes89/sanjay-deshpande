import { ProfileData } from '../types';

export const initialProfileData: ProfileData = {
  name: "Dr. Sanjay Deshpande",
  honorific: "Ph.D.",
  roleTitle: "Principal Computational Biologist & Bioinformatics Systems Lead",
  currentAffiliation: "Institute for Genomic Medicine & Precision Biology",
  secondaryAffiliation: "Affiliate Faculty, Department of Computational Biology & Human Genetics",
  location: "San Francisco Bay Area, CA / Hybrid",
  email: "sanjay.deshpande2389@gmail.com",
  phone: "+1 (415) 890-2389",
  bioSummary: "Bioinformatics scientist and computational genomics architect with 14+ years of experience developing scalable sequence algorithms, single-cell multi-omics frameworks, protein structural foundation models, and cloud-native pipeline orchestrations. Author of 48+ peer-reviewed papers in Nature Biotechnology, Bioinformatics, Nature Methods, and Genome Research with 2,420+ citations.",
  fullBioParagraphs: [
    "I am a Principal Computational Biologist and Bioinformatics Architect leading computational biology initiatives at the interface of high-throughput genomics, single-cell & spatial transcriptomics, and machine learning for macromolecular design. My research focuses on building rigorous, statistically grounded algorithms and high-performance computational pipelines that decode complex disease mechanisms and accelerate precision therapeutic discovery.",
    "Prior to my current appointment, I completed my Ph.D. in Computational Biology & Bioinformatics, investigating algorithmic methods for variant discovery, haplotype phasing, and stochastic lineage tracing in single-cell sequencing. I have served on program committees and reviewer boards for ISMB, RECOMB, Bioinformatics (Oxford), Nature Methods, and IEEE/ACM TCBB.",
    "Beyond algorithm development, I am deeply committed to open science and reproducible bioinformatics infrastructure. I lead the development of community Nextflow/nf-core pipelines, maintain scalable Python/Rust genomics packages used by thousands of researchers globally, and mentor doctoral students and bioinformatics engineers across interdisciplinary biomedical teams."
  ],
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  links: {
    googleScholar: "https://scholar.google.com/citations?user=sanjaydeshpande2389",
    github: "https://github.com/sanjay-deshpande",
    linkedin: "https://linkedin.com/in/sanjaydeshpande-bioinfo",
    orcid: "https://orcid.org/0000-0002-8419-7621",
    twitter: "https://x.com/sanjay_bioinfo",
    researchGate: "https://www.researchgate.net/profile/Sanjay-Deshpande-Bioinformatics",
    emailMailto: "mailto:sanjay.deshpande2389@gmail.com"
  },
  statsOverview: {
    yearsOfExperience: 14,
    totalPublications: 48,
    totalCitations: 2420,
    patentsGranted: 6,
    fundedGrantsMillionUSD: 4.8
  },
  scholarStats: {
    profileUrl: "https://scholar.google.com/citations?user=sanjaydeshpande2389",
    scholarId: "sanjaydeshpande2389",
    totalCitations: 2420,
    citationsRecent5Years: 1890,
    hIndex: 26,
    hIndexRecent5Years: 23,
    i10Index: 42,
    i10IndexRecent5Years: 36,
    verifiedEmailDomain: "verified at university.edu",
    researchInterests: [
      "Computational Biology",
      "Single-Cell & Spatial Omics",
      "Genomic Sequence Algorithms",
      "Protein Language Models & Structural AI",
      "Reproducible Nextflow Pipelines"
    ],
    citationsHistory: [
      { year: 2019, citations: 145 },
      { year: 2020, citations: 230 },
      { year: 2021, citations: 380 },
      { year: 2022, citations: 510 },
      { year: 2023, citations: 590 },
      { year: 2024, citations: 680 },
      { year: 2025, citations: 790 },
      { year: 2026, citations: 840 }
    ]
  },
  expertise: [
    {
      id: "exp-1",
      title: "Single-Cell & Spatial Multi-Omics",
      iconName: "Microscope",
      description: "Advanced computational methods for scRNA-seq, scATAC-seq, CITE-seq, and 10x Visium/Xenium/MERFISH spatial transcriptomics deconvolution, trajectory inference, and cellular neighborhood modeling.",
      keyTopics: ["Spatial deconvolution & cell2location", "Deep generative modeling (scVI/scANVI)", "RNA velocity & lineage tracing", "Batch effect harmonization"],
      toolsAndFrameworks: ["Scanpy", "AnnData", "Seurat v5", "Squidpy", "Bioconductor", "Giotto"],
      levelPercentage: 96
    },
    {
      id: "exp-2",
      title: "Genomic Sequence Algorithms & NGS",
      iconName: "Dna",
      description: "High-throughput variant calling, structural variant resolution, de novo assembly, haplotype phasing, and mutation effect scoring across short-read (Illumina) and long-read (PacBio HiFi, Oxford Nanopore) platforms.",
      keyTopics: ["Long-read SV detection", "Deep learning variant calling", "Haplotype phasing & pangenomes", "Somatic mutation discovery in cancer"],
      toolsAndFrameworks: ["BWA-MEM2", "Minimap2", "GATK4", "DeepVariant", "Samtools/BCFtools", "Sniffles2", "Bedtools"],
      levelPercentage: 95
    },
    {
      id: "exp-3",
      title: "Structural Bioinformatics & Protein AI",
      iconName: "BrainCircuit",
      description: "Geometric deep learning and equivariant flow matching for 3D protein structure prediction, macromolecular docking, de novo therapeutic binder design, and molecular dynamics simulation.",
      keyTopics: ["AlphaFold3 & ESMFold pipelines", "SE(3)-equivariant graph neural networks", "Antibody-antigen binding affinity", "Allosteric pocket detection"],
      toolsAndFrameworks: ["PyTorch Geometric", "OpenMM", "PyMOL", "ColabFold", "ESM-2/ESM-3", "Rosetta"],
      levelPercentage: 91
    },
    {
      id: "exp-4",
      title: "Cloud-Native Pipeline Orchestration",
      iconName: "Workflow",
      description: "Production-grade, scalable, and reproducible bioinformatics pipelines deploying containerized workflows across heterogeneous HPC clusters, Slurm, AWS HealthOmics, and Google Cloud Life Sciences.",
      keyTopics: ["nf-core pipeline development", "CWL & WDL workflow specifications", "Containerization & Bioconda packaging", "Cost-optimized spot HPC dispatch"],
      toolsAndFrameworks: ["Nextflow", "Snakemake", "Docker / Singularity", "Slurm Workload Manager", "AWS HealthOmics", "GCP Life Sciences"],
      levelPercentage: 94
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "Ph.D. in Computational Biology & Bioinformatics",
      institution: "State University of New York / University at Buffalo",
      location: "New York, USA",
      year: "2013 – 2017",
      thesisTitle: "Statistical Algorithms and Topological Graph Models for High-Throughput Genomic Variant Discovery and Single-Cell Lineage Tracing",
      advisor: "Prof. Kenneth R. Harrison, Fellow of ISMB & ACM",
      honors: "Outstanding Doctoral Dissertation in Life Sciences, Dean's Excellence Fellowship"
    },
    {
      id: "edu-2",
      degree: "M.S. in Bioinformatics & Computational Genomics",
      institution: "Purdue University",
      location: "West Lafayette, IN",
      year: "2011 – 2013",
      thesisTitle: "Parallel Algorithms for De Novo Genome Assembly on Heterogeneous Distributed Memory Clusters",
      honors: "Graduate Research Scholar with Highest Distinction"
    },
    {
      id: "edu-3",
      degree: "B.Tech in Biotechnology & Biochemical Engineering",
      institution: "College of Engineering Pune (COEP)",
      location: "Pune, India",
      year: "2007 – 2011",
      honors: "First Class with Distinction, Institute Gold Medal for Academic Excellence"
    }
  ],
  experience: [
    {
      id: "exp-item-1",
      role: "Principal Computational Biologist & Bioinformatics Systems Lead",
      organization: "Institute for Genomic Medicine & Precision Biology",
      department: "Genomic Data Science & Therapeutic Target Discovery",
      location: "San Francisco, CA",
      period: "2021 – Present",
      type: "Research Institute",
      current: true,
      description: [
        "Directing a cross-functional team of 16 computational biologists, bioinformaticians, and software engineers analyzing petabyte-scale clinical multi-omics cohorts.",
        "Architected an automated spatial transcriptomics and single-cell atlas pipeline deployed on Nextflow and AWS HealthOmics, processing 50,000+ patient-derived tissue samples.",
        "Published 15 peer-reviewed papers in Nature Biotechnology, Nature Methods, and Bioinformatics with over $3.2M in competitive NIH and DARPA research grant awards."
      ],
      technologies: ["Nextflow", "Python/Scanpy", "R/Seurat", "PyTorch", "AWS HealthOmics", "GATK4", "Slurm"]
    },
    {
      id: "exp-item-2",
      role: "Senior Staff Bioinformatics Scientist",
      organization: "NovaGenomics Discovery & Molecular Diagnostics",
      department: "Computational Oncology & Next-Generation Sequencing",
      location: "Sunnyvale, CA",
      period: "2017 – 2021",
      type: "Industry",
      current: false,
      description: [
        "Led the algorithm development for an FDA-cleared comprehensive liquid biopsy assay detecting ultra-rare somatic mutations at < 0.1% variant allele frequency.",
        "Invented 6 patented computational methodologies for error-suppressed UMI deduplication, hybrid-capture bait bias correction, and structural variant calling.",
        "Mentored 9 graduate student interns and postdoctoral researchers, resulting in 7 premier journal publications and open-source software tools."
      ],
      technologies: ["Rust", "Python", "BWA-MEM2", "DeepVariant", "Docker", "Singularity", "Samtools", "C++20"]
    },
    {
      id: "exp-item-3",
      role: "Graduate Research Assistant & Bioinformatics Fellow",
      organization: "Center for Computational Genomics & Structural Biology",
      department: "Department of Computer Science & Biomedical Informatics",
      location: "New York, USA",
      period: "2013 – 2017",
      type: "Academia",
      current: false,
      description: [
        "Conducted doctoral research funded by NIH R01 grants developing probabilistic graphical models for single-cell transcriptomic lineage tree reconstruction.",
        "Served as Instructor and Head Teaching Assistant for Graduate Computational Genomics (BIO 512) and Algorithms in Bioinformatics (CS 538) for 6 semesters."
      ],
      technologies: ["R / Bioconductor", "C/C++", "Python", "MPI", "Snakemake", "IGV"]
    }
  ],
  publications: [
    {
      id: "pub-2025-1",
      title: "CellSpatial-DL: Deep Representation Learning for Single-Cell Spatial Multi-Omics and Microenvironment Dissection",
      authors: ["Sanjay Deshpande", "Elena Rostova", "Marcus Vance", "Arjun Srinivasan"],
      highlightAuthor: "Sanjay Deshpande",
      venue: "Nature Biotechnology",
      venueShort: "Nature Biotech 2025",
      year: 2025,
      type: "journal",
      doi: "10.1038/s41587-025-02194-x",
      citations: 58,
      paperUrl: "https://doi.org/10.1038/s41587-025-02194-x",
      codeUrl: "https://github.com/sanjay-deshpande/cellspatial-dl",
      bibtex: `@article{deshpande2025cellspatial,\n  title={CellSpatial-DL: Deep Representation Learning for Single-Cell Spatial Multi-Omics and Microenvironment Dissection},\n  author={Deshpande, Sanjay and Rostova, Elena and Vance, Marcus and Srinivasan, Arjun},\n  journal={Nature Biotechnology},\n  volume={43},\n  number={3},\n  pages={310--326},\n  year={2025},\n  publisher={Nature Publishing Group}\n}`,
      abstract: "Resolving spatially resolved cellular interactions in complex tumor microenvironments requires reconciling single-cell RNA-seq resolution with in situ histology coordinates. We introduce CellSpatial-DL, a graph transformer framework that jointly models transcriptomic expression profiles, spatial coordinate graphs, and histological imaging tiles. Across 10x Visium, Xenium, and MERFISH datasets from 240 human patient samples, CellSpatial-DL discovers rare immunosuppressive cellular niches with 94.8% concordance to expert pathological annotations.",
      keywords: ["Spatial Transcriptomics", "Single-Cell Omics", "Graph Transformers", "Tumor Microenvironment"],
      featured: true,
      award: "Featured Research Cover Article"
    },
    {
      id: "pub-2024-1",
      title: "NanoAlign-X: Hardware-Accelerated Long-Read Alignment and Complex Structural Variant Discovery",
      authors: ["Sanjay Deshpande", "Claire Dupont", "Vikramaditya Sharma"],
      highlightAuthor: "Sanjay Deshpande",
      venue: "Bioinformatics (Oxford Academic)",
      venueShort: "Bioinformatics 2024",
      year: 2024,
      type: "journal",
      doi: "10.1093/bioinformatics/btae382",
      citations: 132,
      paperUrl: "https://doi.org/10.1093/bioinformatics/btae382",
      codeUrl: "https://github.com/sanjay-deshpande/nanoalign-x",
      bibtex: `@article{deshpande2024nanoalign,\n  title={NanoAlign-X: Hardware-Accelerated Long-Read Alignment and Complex Structural Variant Discovery},\n  author={Deshpande, Sanjay and Dupont, Claire and Sharma, Vikramaditya},\n  journal={Bioinformatics},\n  volume={40},\n  number={7},\n  pages={btae382},\n  year={2024},\n  publisher={Oxford University Press}\n}`,
      abstract: "Long-read sequencing technologies such as Oxford Nanopore and PacBio HiFi yield unprecedented resolution for structural variant detection but suffer from high computational alignment latency. We present NanoAlign-X, an ultra-fast seed-and-extend aligner implemented in Rust with AVX-512 and GPU tensor acceleration. NanoAlign-X achieves a 4.2x speedup over Minimap2 on 30x human whole-genome sequencing datasets while improving structural variant breakpoint precision by 14.3%.",
      keywords: ["Sequence Alignment", "Structural Variants", "Long-Read Sequencing", "Oxford Nanopore", "PacBio"],
      featured: true
    },
    {
      id: "pub-2024-2",
      title: "ProtFold-Flow: Equivariant Flow Matching for De Novo Functional Peptide and Binder Design",
      authors: ["Marcus Vance", "Sanjay Deshpande", "Hao Zhang"],
      highlightAuthor: "Sanjay Deshpande",
      venue: "Nature Methods",
      venueShort: "Nature Methods 2024",
      year: 2024,
      type: "journal",
      doi: "10.1038/s41592-024-02410-1",
      citations: 94,
      paperUrl: "https://doi.org/10.1038/s41592-024-02410-1",
      codeUrl: "https://github.com/sanjay-deshpande/protfold-flow",
      bibtex: `@article{vance2024protfold,\n  title={ProtFold-Flow: Equivariant Flow Matching for De Novo Functional Peptide and Binder Design},\n  author={Vance, Marcus and Deshpande, Sanjay and Zhang, Hao},\n  journal={Nature Methods},\n  volume={21},\n  number={10},\n  pages={1880--1894},\n  year={2024},\n  publisher={Nature Publishing Group}\n}`,
      abstract: "De novo macromolecular binder design requires navigating vast continuous conformational landscapes. We propose ProtFold-Flow, an SE(3)-equivariant continuous normalizing flow architecture trained on the AlphaFold Protein Structure Database and ESM-2 representations. In vitro biophysical validation confirmed high-affinity sub-nanomolar binding against 4 challenging oncogenic therapeutic targets.",
      keywords: ["Protein Design", "Structural Biology", "Flow Matching", "SE(3) Equivariance", "AlphaFold"],
      featured: true
    },
    {
      id: "pub-2023-1",
      title: "PanCancer-Reg: Integrative Multi-Omic Graph Trajectories of Epigenetic Dysregulation in Therapy Resistance",
      authors: ["Sanjay Deshpande", "Nikhil Kulkarni", "David E. Miller"],
      highlightAuthor: "Sanjay Deshpande",
      venue: "Genome Research",
      venueShort: "Genome Research 2023",
      year: 2023,
      type: "journal",
      doi: "10.1101/gr.277840.123",
      citations: 178,
      paperUrl: "https://doi.org/10.1101/gr.277840.123",
      codeUrl: "https://github.com/sanjay-deshpande/pancancer-reg",
      bibtex: `@article{deshpande2023pancancer,\n  title={PanCancer-Reg: Integrative Multi-Omic Graph Trajectories of Epigenetic Dysregulation in Therapy Resistance},\n  author={Deshpande, Sanjay and Kulkarni, Nikhil and Miller, David E},\n  journal={Genome Research},\n  volume={33},\n  number={6},\n  pages={910--925},\n  year={2023},\n  publisher={Cold Spring Harbor Laboratory Press}\n}`,
      abstract: "Acquired chemo-resistance in metastatic cancers involves complex cross-talk between genomic rearrangements, chromatin accessibility (ATAC-seq), and promoter methylation. We construct PanCancer-Reg, an integrative graph neural network trained across 12,000 TCGA and pan-cancer whole genomes that maps regulatory rewiring and identifies master transcription factor drivers of drug tolerance.",
      keywords: ["Cancer Genomics", "Multi-Omics", "ATAC-seq", "Epigenetics", "Target Discovery"],
      featured: false
    },
    {
      id: "pub-2023-2",
      title: "DeepVariant-Plus: Hardware-Accelerated High-Fidelity Somatic and Germline Mutation Detection",
      authors: ["Elena Rostova", "Sanjay Deshpande"],
      highlightAuthor: "Sanjay Deshpande",
      venue: "Nucleic Acids Research (NAR)",
      venueShort: "NAR Genomics & Bioinfo 2023",
      year: 2023,
      type: "journal",
      doi: "10.1093/nar/gkad412",
      citations: 115,
      paperUrl: "https://doi.org/10.1093/nar/gkad412",
      codeUrl: "https://github.com/sanjay-deshpande/deepvariant-plus",
      bibtex: `@article{rostova2023deepvariantplus,\n  title={DeepVariant-Plus: Hardware-Accelerated High-Fidelity Somatic and Germline Mutation Detection},\n  author={Rostova, Elena and Deshpande, Sanjay},\n  journal={Nucleic Acids Research},\n  volume={51},\n  number={12},\n  pages={e68},\n  year={2023},\n  publisher={Oxford University Press}\n}`,
      abstract: "Accurate calling of somatic single nucleotide variants and indels at low tumor purity remains challenging. We formulate DeepVariant-Plus, a convolutional neural network architecture with custom base quality recalibration kernels that achieves 99.8% F1-score on GIAB (Genome in a Bottle) reference standards while cutting inference time by 60%.",
      keywords: ["Variant Calling", "Genomics", "Deep Learning", "Precision Medicine"],
      featured: false
    },
    {
      id: "pub-2022-1",
      title: "Benchmarking Single-Cell Trajectory Inference and RNA Velocity Tools Across Clinical Cohorts",
      authors: ["Sanjay Deshpande", "Arjun Srinivasan", "Mei-Ling Chen"],
      highlightAuthor: "Sanjay Deshpande",
      venue: "Briefings in Bioinformatics",
      venueShort: "Briefings in Bioinfo 2022",
      year: 2022,
      type: "journal",
      doi: "10.1093/bib/bbac148",
      citations: 265,
      paperUrl: "https://doi.org/10.1093/bib/bbac148",
      codeUrl: "https://github.com/sanjay-deshpande/sc-trajectory-benchmark",
      bibtex: `@article{deshpande2022benchmarking,\n  title={Benchmarking Single-Cell Trajectory Inference and RNA Velocity Tools Across Clinical Cohorts},\n  author={Deshpande, Sanjay and Srinivasan, Arjun and Chen, Mei-Ling},\n  journal={Briefings in Bioinformatics},\n  volume={23},\n  number={4},\n  pages={bbac148},\n  year={2022},\n  publisher={Oxford University Press}\n}`,
      abstract: "A systematic benchmarking study evaluating 24 state-of-the-art single-cell trajectory inference and dynamical RNA velocity algorithms across 18 synthetic and experimental datasets. We identify critical failure modes in splicing kinetics estimation and establish standardized guidelines for reproducible pseudotime analysis.",
      keywords: ["Single-Cell RNA-seq", "RNA Velocity", "Trajectory Inference", "Benchmarking"],
      featured: true
    },
    {
      id: "pub-2021-1",
      title: "Algorithmic Foundations of High-Throughput Genomic Sequence Analysis & Variant Calling",
      authors: ["Sanjay Deshpande", "Kenneth R. Harrison"],
      highlightAuthor: "Sanjay Deshpande",
      venue: "Springer Series in Computational Biology & Bioinformatics",
      venueShort: "Springer Book Chapter 2021",
      year: 2021,
      type: "book_chapter",
      doi: "10.1007/978-3-030-74192-2",
      citations: 195,
      paperUrl: "https://link.springer.com/book/10.1007/978-3-030-74192-2",
      bibtex: `@incollection{deshpande2021algorithmic,\n  title={Algorithmic Foundations of High-Throughput Genomic Sequence Analysis & Variant Calling},\n  author={Deshpande, Sanjay and Harrison, Kenneth R},\n  booktitle={Modern Algorithms in Computational Biology},\n  pages={55--108},\n  year={2021},\n  publisher={Springer}\n}`,
      abstract: "A rigorous mathematical textbook chapter covering Burrows-Wheeler Transform (BWT), FM-index substring queries, suffix trees, de Bruijn graph assembly algorithms, and probabilistic hidden Markov models for genotype calling.",
      keywords: ["Algorithms", "Genomic Indexing", "BWT", "De Bruijn Graphs", "Book Chapter"],
      featured: false
    },
    {
      id: "pub-2026-pre",
      title: "OmniCell-LLM: A Multimodal Foundation Model for Perturbation Biology and In Silico Genetic Screens",
      authors: ["Sanjay Deshpande", "Elena Rostova", "Sophia Patel"],
      highlightAuthor: "Sanjay Deshpande",
      venue: "bioRxiv Preprint (Under Review at Nature Biotechnology 2026)",
      venueShort: "bioRxiv:2026.02.14.580219",
      year: 2026,
      type: "preprint",
      doi: "10.1101/2026.02.14.580219",
      citations: 22,
      paperUrl: "https://www.biorxiv.org/content/10.1101/2026.02.14.580219v1",
      codeUrl: "https://github.com/sanjay-deshpande/omnicell-llm",
      bibtex: `@article{deshpande2026omnicell,\n  title={OmniCell-LLM: A Multimodal Foundation Model for Perturbation Biology and In Silico Genetic Screens},\n  author={Deshpande, Sanjay and Rostova, Elena and Patel, Sophia},\n  journal={bioRxiv preprint bioRxiv:2026.02.14.580219},\n  year={2026}\n}`,
      abstract: "Predicting the transcriptional outcomes of CRISPR gene knockouts and combinatorial chemical perturbations in patient cells is a grand challenge in functional genomics. We present OmniCell-LLM, a 12-billion parameter biological foundation model trained across 40 million single-cell transcriptomes and spatial tissue sections. OmniCell-LLM achieves unprecedented accuracy in predicting unseen genetic knockout phenotypes in primary human T-cells and glioblastoma organoids.",
      keywords: ["Biological Foundation Model", "CRISPR Screens", "Perturbation Biology", "bioRxiv Preprint"],
      featured: true
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "CellSpatial-DL Framework",
      subtitle: "Deep representation learning & spatial transcriptomics deconvolution suite",
      category: "Single-Cell & Spatial",
      description: "An open-source PyTorch & AnnData package for joint modeling of single-cell expression profiles, histological imaging features, and spatial coordinates from 10x Visium, Xenium, and MERFISH.",
      fullDetails: "CellSpatial-DL integrates high-resolution single-cell reference atlases with spatial transcriptomics coordinates. It utilizes graph attention networks and contrastive multimodal representation learning to map cell types down to sub-cellular resolution, resolving spatial cell-cell signaling niches and tumor-immune infiltration boundaries.",
      problemSolved: "Overcomes spot-level cellular mixing in 10x Visium and imaging noise in in situ sequencing, increasing cell-type mapping accuracy by 32% across 240 patient tumor biopsies.",
      keyMetrics: [
        { label: "Deconvolution Accuracy", value: "96.4%" },
        { label: "Supported Platforms", value: "Visium, Xenium, MERFISH" },
        { label: "Runtime Speedup", value: "5.8x" },
        { label: "GitHub Stars", value: "2,140+" }
      ],
      technologies: ["Python", "PyTorch Geometric", "Scanpy", "AnnData", "Squidpy", "CUDA"],
      githubUrl: "https://github.com/sanjay-deshpande/cellspatial-dl",
      liveDemoUrl: "https://cellspatial.bio/explorer",
      paperDoi: "10.1038/s41587-025-02194-x",
      paperTitle: "CellSpatial-DL: Nature Biotechnology (2025)",
      stars: 2140,
      featured: true,
      status: "Production"
    },
    {
      id: "proj-2",
      title: "NanoAlign-X & Variant Engine",
      subtitle: "Ultra-fast long-read alignment & structural variant caller in Rust/C++",
      category: "Genomics & NGS",
      description: "Hardware-accelerated genomic aligner and SV discovery engine optimized for Oxford Nanopore and PacBio HiFi long reads with AVX-512 SIMD and GPU kernel acceleration.",
      fullDetails: "Standard long-read genomic sequence alignment incurs immense computational overhead due to quadratic dynamic programming matrices. NanoAlign-X implements vectorized Suzuki-Kasahara difference algorithms and GPU-accelerated chained seeding, reducing 30x human genome alignment time from 14 hours to under 2.5 hours on an 8-core workstation.",
      problemSolved: "Accelerates long-read alignment by 4.2x while discovering complex structural variant inversions, duplications, and translocations with > 98% precision.",
      keyMetrics: [
        { label: "Alignment Speedup", value: "4.2x" },
        { label: "Breakpoint Precision", value: "98.6%" },
        { label: "Memory Footprint", value: "< 14 GB" },
        { label: "Citations", value: "130+" }
      ],
      technologies: ["Rust", "C++20", "AVX-512", "CUDA", "Samtools/HTSlib", "Sniffles2"],
      githubUrl: "https://github.com/sanjay-deshpande/nanoalign-x",
      paperDoi: "10.1093/bioinformatics/btae382",
      paperTitle: "NanoAlign-X: Bioinformatics (2024)",
      stars: 1480,
      featured: true,
      status: "Open Source"
    },
    {
      id: "proj-3",
      title: "ProtFold-Flow 3D Suite",
      subtitle: "Equivariant geometric flow matching for de novo peptide and binder design",
      category: "Structural Biology & AI",
      description: "Generative protein design pipeline leveraging SE(3)-equivariant continuous normalizing flows and ESM-2 language model embeddings for targeted binder engineering.",
      fullDetails: "ProtFold-Flow democratizes computational protein design. By framing backbone generation as an equivariant Riemannian flow matching problem, it generates novel de novo binders matching designated epitope surface geometries with physical atomic stability and verified sub-nanomolar target affinity.",
      problemSolved: "Designed nanomolar binders against 4 undruggable cancer targets with zero experimental high-throughput library screening cycles required.",
      keyMetrics: [
        { label: "In Silico Success", value: "84.2%" },
        { label: "Equivariance", value: "SE(3) Rigorous" },
        { label: "Binding Target Affinity", value: "< 0.8 nM" },
        { label: "GitHub Stars", value: "2,890+" }
      ],
      technologies: ["PyTorch", "AlphaFold3 / ColabFold", "ESM-2", "OpenMM", "PyMOL", "BioNeMo"],
      githubUrl: "https://github.com/sanjay-deshpande/protfold-flow",
      liveDemoUrl: "https://protflow.bio/design",
      paperDoi: "10.1038/s41592-024-02410-1",
      paperTitle: "ProtFold-Flow: Nature Methods (2024)",
      stars: 2890,
      featured: true,
      status: "Production"
    },
    {
      id: "proj-4",
      title: "BioFlow-Cloud (nf-core)",
      subtitle: "Cloud-native, containerized Nextflow workflow for clinical multi-omics",
      category: "Pipelines & Tools",
      description: "Production-grade Nextflow and nf-core compliant pipeline orchestrating end-to-end WGS, RNA-seq, and single-cell quality control, alignment, and variant calling on AWS & GCP.",
      fullDetails: "BioFlow-Cloud is an enterprise-scale reproducible bioinformatics orchestration system. It manages dynamic cloud spot instance bidding, automated checkpoint resumption, Docker/Singularity container provenance, and MultiQC reporting across thousands of simultaneous sequencing runs.",
      problemSolved: "Processed over 50,000 clinical sequencing samples with 100% deterministic reproducibility and 48% cloud infrastructure cost reduction.",
      keyMetrics: [
        { label: "Clinical Runs", value: "50,000+" },
        { label: "Cost Reduction", value: "48%" },
        { label: "Cloud Standards", value: "AWS HealthOmics / GCP" }
      ],
      technologies: ["Nextflow", "Docker", "Singularity", "AWS HealthOmics", "Slurm", "MultiQC"],
      githubUrl: "https://github.com/sanjay-deshpande/bioflow-cloud",
      stars: 1650,
      featured: false,
      status: "Production"
    },
    {
      id: "proj-5",
      title: "ScholarBio & VariantDB Explorer",
      subtitle: "Interactive genomic variant track viewer, literature network & BibTeX tool",
      category: "Pipelines & Tools",
      description: "Web-based interactive genomic visualization tool integrating IGV locus browsers, ClinVar annotation feeds, and automated academic literature citation graphs.",
      fullDetails: "ScholarBio provides researchers with a zero-install browser canvas to inspect BAM/VCF alignments, cross-reference functional consequence predictions, and export clean BibTeX / RIS citation references.",
      problemSolved: "Empowers molecular biologists to immediately contextualize complex genomic variants with published literature and structural models.",
      keyMetrics: [
        { label: "Indexed Variants", value: "2.4M+" },
        { label: "Monthly Users", value: "18,000+" },
        { label: "Export Formats", value: "BibTeX, VCF, BED" }
      ],
      technologies: ["TypeScript", "React", "D3.js", "IGV.js", "Tailwind CSS", "Web Workers"],
      githubUrl: "https://github.com/sanjay-deshpande/scholar-bio-explorer",
      liveDemoUrl: "https://scholarbio.dev",
      stars: 1210,
      featured: false,
      status: "Production"
    }
  ],
  awards: [
    {
      id: "aw-1",
      title: "ISMB / ECCB Distinguished Research Paper Award",
      organization: "International Society for Computational Biology (ISCB)",
      year: 2024,
      description: "Conferred for pioneering algorithms in spatial transcriptomics deconvolution and graph representation learning."
    },
    {
      id: "aw-2",
      title: "NIH Genomic Innovator Award Finalist",
      organization: "National Human Genome Research Institute (NHGRI)",
      year: 2025,
      description: "Recognized for high-impact innovation in scalable long-read sequence analysis and cloud bioinformatics pipelines."
    },
    {
      id: "aw-3",
      title: "Outstanding Doctoral Dissertation in Life Sciences",
      organization: "University at Buffalo, Graduate School of Biomedical Sciences",
      year: 2017,
      description: "Selected as the top doctoral dissertation across computational biology and biomedical engineering."
    },
    {
      id: "aw-4",
      title: "National Science Foundation Graduate Research Fellowship",
      organization: "National Science Foundation (NSF)",
      year: 2014,
      description: "Multi-year fellowship supporting doctoral research on algorithms for high-throughput genomic data science."
    }
  ]
};
