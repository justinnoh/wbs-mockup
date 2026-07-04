// 공통 레이아웃: 좌측 사이드바 + 헤더 + AI 챗 플로팅 버튼
// 사용법: <body data-page="project"> ... <div id="content">페이지 내용</div> ... <script src="shared.js">
(function () {
  const page = document.body.dataset.page || '';
  const MENU = [
    { id: 'mytasks',  href: 'mytasks.html',  label: '내 업무 관리', icon: 'M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11' },
    { id: 'project',  href: 'project.html',  label: '프로젝트 관리', icon: 'M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z' },
    { id: 'meetings', href: 'meetings.html', label: '회의록', icon: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z' },
  ];
  const ADMIN = [
    { id: 'agent', href: 'agent.html', label: 'Agent 관리', icon: 'M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2zM7.5 13a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z' },
  ];
  const item = (m, active) => `
    <a href="${m.href}" class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-semibold tracking-tight transition
       ${active ? 'bg-[#fdeeee] text-[#d94f4f]' : 'text-[#5b5b64] hover:bg-[#f4f2f0]'}">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${m.icon}"/></svg>
      ${m.label}
    </a>`;

  const sidebar = `
  <aside class="w-[228px] shrink-0 h-screen sticky top-0 flex flex-col border-r border-[#ececef] bg-white">
    <div class="flex items-center gap-2.5 px-5 pt-5 pb-4">
      <div class="w-8 h-8 rounded-lg bg-[#f06a6a] text-white text-[15px] font-extrabold flex items-center justify-center tracking-tighter">W</div>
      <div>
        <div class="text-[14px] font-bold tracking-tight leading-tight">WBS</div>
        <div class="text-[10.5px] text-[#9a9aa3] font-medium">프로젝트 워크스페이스</div>
      </div>
    </div>
    <div class="mx-4 mb-4 flex items-center gap-2 rounded-xl border border-[#ececef] bg-[#faf8f6] px-3 py-2">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f06a6a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-5.1-7-11a7 7 0 0114 0c0 5.9-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
      <div class="min-w-0">
        <div class="text-[10px] text-[#a3a3ad] font-semibold leading-none">현재 지점</div>
        <div class="text-[12px] font-bold tracking-tight mt-0.5">강남지점</div>
      </div>
    </div>
    <nav class="px-3 flex flex-col gap-1">${MENU.map(m => item(m, m.id === page)).join('')}</nav>
    <div class="px-6 pt-6 pb-2 text-[10px] font-bold text-[#b4b4bc] tracking-wide">관리자</div>
    <nav class="px-3 flex flex-col gap-1">${ADMIN.map(m => item(m, m.id === page)).join('')}</nav>
    <div class="mt-auto px-5 py-4 border-t border-[#ececef]">
      <div class="text-[10.5px] text-[#b4b4bc] font-medium leading-relaxed">UI 목업 · 더미 데이터<br>클릭 흐름 확인용 데모</div>
    </div>
  </aside>`;

  const header = `
  <header class="flex items-center justify-between px-6 py-3.5 border-b border-[#ececef] bg-white sticky top-0 z-30">
    <div class="flex items-center gap-2 text-[#86868f]">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></svg>
      <input placeholder="프로젝트, 업무, 파일 검색" class="w-64 bg-transparent text-[12.5px] font-medium placeholder-[#b4b4bc] focus:outline-none text-[#3d3d45]">
    </div>
    <div class="flex items-center gap-1.5">
      <button class="relative w-9 h-9 rounded-lg flex items-center justify-center text-[#86868f] hover:bg-[#f4f2f0]" title="공지사항">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/></svg>
        <span class="absolute top-1.5 right-2 w-[7px] h-[7px] rounded-full bg-[#f0563f] border-[1.5px] border-white"></span>
      </button>
      <div class="w-px h-6 bg-[#ececef] mx-2"></div>
      <div class="flex items-center gap-2.5">
        <div class="text-right">
          <div class="text-[12.5px] font-bold tracking-tight leading-tight">김지훈 책임</div>
          <div class="text-[10px] text-[#9a9aa3] font-medium">프로덕트 매니저 · 프로덕트팀</div>
        </div>
        <div class="w-9 h-9 rounded-[10px] bg-[#fdeeee] text-[#d94f4f] text-[12.5px] font-bold flex items-center justify-center">김</div>
      </div>
    </div>
  </header>`;

  const chatFab = `
  <button id="chatFab" class="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#18181b] text-white pl-4 pr-5 py-3 shadow-lg hover:bg-[#2d2d33] transition" onclick="document.getElementById('chatPop').classList.toggle('hidden')">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
    <span class="text-[12.5px] font-bold tracking-tight">AI 비서</span>
  </button>
  <div id="chatPop" class="hidden fixed bottom-20 right-6 z-40 w-[340px] rounded-2xl bg-white border border-[#ececef] shadow-2xl overflow-hidden">
    <div class="flex items-center justify-between px-4 py-3 border-b border-[#ececef]">
      <div class="flex items-center gap-2">
        <div class="w-7 h-7 rounded-lg bg-[#18181b] text-white flex items-center justify-center">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a2 2 0 012 2v2h3a2 2 0 012 2v3h1v4h-1v3a2 2 0 01-2 2H7a2 2 0 01-2-2v-3H4v-4h1V8a2 2 0 012-2h3V4a2 2 0 012-2z"/></svg>
        </div>
        <div>
          <div class="text-[12.5px] font-bold tracking-tight leading-none">WBS 비서</div>
          <div class="text-[10px] text-[#1fa971] font-semibold mt-0.5">● 온라인</div>
        </div>
      </div>
      <button class="text-[#b4b4bc] hover:text-[#5b5b64]" onclick="document.getElementById('chatPop').classList.add('hidden')">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="px-4 py-4 flex flex-col gap-3 bg-[#faf8f6] h-[260px] overflow-y-auto">
      <div class="self-start max-w-[240px] bg-white border border-[#ececef] rounded-[4px_12px_12px_12px] px-3 py-2 text-[12px] leading-relaxed font-medium text-[#2d2d33]">안녕하세요, 김지훈님. 무엇을 도와드릴까요? <span class="font-mono text-[10.5px] text-[#9a9aa3]">/p</span> 를 입력하면 참여 중인 프로젝트를 조회할 수 있어요.</div>
      <div class="self-end max-w-[240px] bg-[#fdeeee] rounded-[12px_4px_12px_12px] px-3 py-2 text-[12px] leading-relaxed font-medium text-[#2d2d33]">오늘 마감 업무 알려줘</div>
      <div class="self-start max-w-[240px] bg-white border border-[#ececef] rounded-[4px_12px_12px_12px] px-3 py-2 text-[12px] leading-relaxed font-medium text-[#2d2d33]">오늘 마감 업무가 <b>2건</b> 있어요.<br>· 데이터 마이그레이션 (ERP)<br>· 채널 세팅 (마케팅 캠페인)</div>
    </div>
    <div class="flex items-center gap-2 px-3 py-2.5 border-t border-[#ececef] bg-white">
      <input placeholder="메시지 입력…" class="flex-1 text-[12px] font-medium bg-[#f4f2f0] rounded-lg px-3 py-2 focus:outline-none placeholder-[#b4b4bc]">
      <button class="w-8 h-8 rounded-lg bg-[#f06a6a] text-white flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
      </button>
    </div>
  </div>`;

  const content = document.getElementById('content');
  const wrapper = document.createElement('div');
  wrapper.className = 'flex min-h-screen bg-[#faf8f6]';
  wrapper.innerHTML = sidebar + '<div class="flex-1 min-w-0 flex flex-col">' + header + '<main class="flex-1 min-w-0"></main></div>';
  document.body.prepend(wrapper);
  wrapper.querySelector('main').appendChild(content);
  document.body.insertAdjacentHTML('beforeend', chatFab);
})();
