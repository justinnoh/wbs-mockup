// 공통 head 리소스: Tailwind CDN + Pretendard + JetBrains Mono + 기본 타이포 설정
document.write(`
<script src="https://cdn.tailwindcss.com"><\/script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  html { -webkit-font-smoothing: antialiased; }
  body { font-family: 'Pretendard Variable', Pretendard, -apple-system, 'Segoe UI', sans-serif; color: #18181b; letter-spacing: -0.01em; }
  .font-mono, .mono { font-family: 'JetBrains Mono', monospace !important; }
  ::-webkit-scrollbar { width: 9px; height: 9px; }
  ::-webkit-scrollbar-thumb { background: #dcdce2; border-radius: 6px; border: 2px solid #fff; }
</style>
`);
