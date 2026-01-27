import streamlit as st
from PIL import Image

# --- PAGE CONFIG ---
st.set_page_config(page_title="Kshitij Panchal | Portfolio", page_icon="📊", layout="wide")

# --- CUSTOM CSS (Mirroring the 'Wall of Portfolios' Style) ---
st.markdown("""
    <style>
    .main {
        background-color: #ffffff;
    }
    h1, h2, h3 {
        color: #1a1a1a;
        font-family: 'Helvetica Neue', sans-serif;
    }
    .stButton>button {
        background-color: #000000;
        color: white;
        border-radius: 5px;
    }
    .project-card {
        border: 1px solid #e6e6e6;
        padding: 20px;
        border-radius: 10px;
        background-color: #fcfcfc;
        margin-bottom: 20px;
    }
    </style>
    """, unsafe_allow_html=True)

# --- HERO SECTION ---
col1, col2 = st.columns([2, 1], gap="large")

with col1:
    st.markdown("### HEY, I'M **Kshitij Surendra Panchal**")
    st.write(
        "A Data Scientist passionate about Deep Learning and Analytics. "
        "I specialize in transforming complex data into actionable stories through "
        "advanced modeling and dynamic visualization."
    )
    st.write("📍 Mumbai, India")
    if st.button("Download Resume"):
        st.info("Link your PDF here")

with col2:
    # Replace with your professional headshot
    st.image("https://via.placeholder.com/300", width=250)

st.write("---")

# --- SKILLS PILLS ---
st.markdown("### 🛠️ Technical Toolkit")
skills = ["Python", "AWS", "SQL", "Power BI", "Tableau", "Deep Learning", "NLP"]
st.write(f"**{' | '.join(skills)}**")

st.write("---")

# --- CASE STUDIES / PROJECTS ---
st.markdown("## 🚀 Featured Case Studies")

# Project 1: NETRAI
with st.container():
    st.markdown('<div class="project-card">', unsafe_allow_html=True)
    c1, c2 = st.columns([1, 2])
    with c1:
        st.write("**NETRAI: Road Accident Detection**")
    with c2:
        st.write("Developed a real-time system using YOLOv12, achieving 83.3% F1-Score. Integrated Gemini 2 Flash for severity analysis.")
        st.caption("Tech: YOLOv12, Firebase, Gemini 2 Flash, Deep Learning")
    st.markdown('</div>', unsafe_allow_html=True)

# Project 2: Multimodal RAG
with st.container():
    st.markdown('<div class="project-card">', unsafe_allow_html=True)
    c1, c2 = st.columns([1, 2])
    with c1:
        st.write("**Qwen-Based RAG System**")
    with c2:
        st.write("AI-powered system for PDF/DOC analysis with 92% retrieval precision using ChromaDB and MiniLM-L6-v2 embeddings.")
        st.caption("Tech: Qwen2.5-VL, Docling, ChromaDB, Streamlit")
    st.markdown('</div>', unsafe_allow_html=True)

# Project 3: Marketing Optimization
with st.container():
    st.markdown('<div class="project-card">', unsafe_allow_html=True)
    c1, c2 = st.columns([1, 2])
    with c1:
        st.write("**Flipkart Marketing Spend Optimization**")
    with c2:
        st.write("Built interactive dashboards to analyze ROI, ROAS, and CPA, recommending budget reallocations for high-value segments.")
        st.caption("Tech: Power BI, Tableau, Data Modeling")
    st.markdown('</div>', unsafe_allow_html=True)

st.write("---")

# --- EDUCATION ---
st.markdown("## 🎓 Education")
st.markdown("**Master of Data Science** | NMIMS, Mumbai")
st.write("2024 - 2026 | CGPA: 8.0/10")

st.markdown("**Bachelor of Science in Mathematics** | Wilson College")
st.write("2021 - 2024 | CGPA: 7.40/10")

st.write("---")

# --- FOOTER ---
st.markdown("### Let's build something impactful together!")
st.write("🔗 [LinkedIn](https://www.linkedin.com/in/kshitij-panchal-5707b92a5/) | 🐙 [GitHub](https://github.com/Kshitij-p14)")
