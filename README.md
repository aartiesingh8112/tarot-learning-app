* {
  box-sizing: border-box;
}

:root {
  color: #f5efe7;
  background: #120f1a;
  font-family: Inter, system-ui, sans-serif;
}

body {
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(180deg, #1a1220 0%, #120f1a 100%);
}

button,
input {
  font: inherit;
}

.app-shell {
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 20px 80px;
}

.hero {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 40px;
  margin-bottom: 24px;
}

.eyebrow {
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #d7b3ff;
  font-size: 12px;
  margin-bottom: 8px;
}

.hero h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.1;
  margin: 0 0 16px;
  max-width: 800px;
}

.subtitle {
  color: #d8d0e7;
  max-width: 700px;
  font-size: 1.1rem;
}

.cta-row {
  margin-top: 24px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.primary,
.secondary {
  border: none;
  border-radius: 999px;
  padding: 12px 20px;
  cursor: pointer;
}

.primary {
  background: linear-gradient(135deg, #b183ff 0%, #7c5cff 100%);
  color: white;
}

.secondary {
  background: rgba(255, 255, 255, 0.06);
  color: #f5efe7;
  border: 1px solid rgba(255,255,255,0.08);
}

.settings-card,
.panel,
.stat-card,
.pattern-item,
.combination-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
}

.settings-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  margin-bottom: 24px;
}

.toggle-row {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
}

.stats-grid,
.content-grid,
.dashboard-grid,
.combination-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.stat-card,
.pattern-item,
.combination-card {
  padding: 20px;
}

.stat-card span {
  color: #d8d0e7;
}

.stat-card strong {
  font-size: 2rem;
}

.panel {
  padding: 24px;
}

.panel h3 {
  margin-top: 0;
  margin-bottom: 12px;
}

.panel ul,
.panel ol {
  margin: 0;
  padding-left: 18px;
  color: #e8def8;
}

.panel li + li {
  margin-top: 8px;
}

.feature-panel {
  margin-top: 24px;
}

.pattern-list {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.pattern-item {
  padding: 16px;
}

.pattern-item p {
  margin: 8px 0 0;
  color: #d8d0e7;
}

.combination-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
