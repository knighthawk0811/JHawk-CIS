---
title: Binary Simulator
subtitle: 
comments: false
bigimg:
  - src: /img/wallpaper_code.png
    desc: ""
    position: center center
---


<style>
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&family=Space+Grotesk:wght@500;700&display=swap');

  .binary-sim-wrap{
    --bg:#0a0f0d;
    --panel:#0f1713;
    --trace:#1c2b24;
    --off:#16211c;
    --off-border:#2a3a32;
    --on:#5eff9d;
    --on-glow:rgba(94,255,157,0.55);
    --amber:#ffb454;
    --text:#d8ece2;
    --dim:#6d8579;
    --danger:#ff6b6b;

    box-sizing:border-box;
    background:
      radial-gradient(circle at 20% 10%, rgba(94,255,157,0.05), transparent 40%),
      radial-gradient(circle at 80% 90%, rgba(255,180,84,0.04), transparent 45%),
      var(--bg);
    color:var(--text);
    font-family:'JetBrains Mono', monospace;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:40px 16px 60px;
    border-radius:16px;
  }
  .binary-sim-wrap *{box-sizing:border-box;}

  .binary-sim-wrap .eyebrow{
    font-size:11px;
    letter-spacing:0.35em;
    text-transform:uppercase;
    color:var(--dim);
    margin-bottom:6px;
  }
  .binary-sim-wrap h1{
    font-family:'Space Grotesk', sans-serif;
    font-weight:700;
    font-size:clamp(28px,5vw,42px);
    margin:0 0 6px;
    letter-spacing:-0.02em;
  }
  .binary-sim-wrap h1 span{color:var(--on);}
  .binary-sim-wrap .sub{
    color:var(--dim);
    font-size:13px;
    max-width:520px;
    text-align:center;
    line-height:1.5;
    margin-bottom:36px;
  }

  .binary-sim-wrap .board{
    background:var(--panel);
    border:1px solid var(--trace);
    border-radius:14px;
    padding:32px clamp(12px,4vw,40px);
    width:100%;
    max-width:920px;
    position:relative;
    box-shadow: 0 40px 80px -40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.02);
  }
  .binary-sim-wrap .board::before{
    content:'';
    position:absolute;
    top:0;left:24px;right:24px;height:1px;
    background:linear-gradient(90deg, transparent, var(--on-glow), transparent);
    opacity:0.4;
  }

  .binary-sim-wrap .grid{
    display:grid;
    grid-template-columns:repeat(8, minmax(0,1fr));
    gap:clamp(6px, 1.6vw, 14px);
    width:100%;
  }

  .binary-sim-wrap .col{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:10px;
  }

  .binary-sim-wrap .math{
    font-size:clamp(9px,1.6vw,12px);
    color:var(--dim);
    letter-spacing:0.02em;
    white-space:nowrap;
  }
  .binary-sim-wrap .math sup{ color:var(--amber); }

  .binary-sim-wrap .place{
    font-size:clamp(11px,2.2vw,15px);
    font-weight:700;
    color:var(--dim);
    transition:color .2s ease;
  }
  .binary-sim-wrap .col.active .place{ color:var(--amber); }

  .binary-sim-wrap .trace-line{
    width:2px;
    height:16px;
    background:var(--off-border);
    transition:background .25s ease, box-shadow .25s ease;
  }
  .binary-sim-wrap .col.active .trace-line{
    background:var(--on);
    box-shadow:0 0 8px var(--on-glow);
  }

  .binary-sim-wrap .bit{
    width:100%;
    aspect-ratio:1/1;
    max-width:74px;
    border-radius:10px;
    border:1.5px solid var(--off-border);
    background:
      linear-gradient(180deg, rgba(255,255,255,0.02), transparent),
      var(--off);
    color:var(--dim);
    font-family:'JetBrains Mono', monospace;
    font-weight:800;
    font-size:clamp(20px,4vw,28px);
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    user-select:none;
    transition:all .15s ease;
  }
  .binary-sim-wrap .bit:hover{ border-color:var(--dim); transform:translateY(-1px); }
  .binary-sim-wrap .bit:active{ transform:translateY(0); }
  .binary-sim-wrap .bit.on{
    background:radial-gradient(circle at 50% 35%, rgba(94,255,157,0.35), var(--off) 70%);
    border-color:var(--on);
    color:var(--on);
    box-shadow:0 0 18px var(--on-glow), inset 0 0 12px rgba(94,255,157,0.15);
  }

  .binary-sim-wrap .bit-label{
    font-size:10px;
    color:var(--dim);
    letter-spacing:0.08em;
  }

  .binary-sim-wrap .divider{
    height:1px;
    background:var(--trace);
    margin:28px 0;
    width:100%;
  }

  .binary-sim-wrap .readout{
    display:flex;
    flex-wrap:wrap;
    gap:14px;
    justify-content:center;
  }
  .binary-sim-wrap .stat{
    flex:1 1 150px;
    min-width:130px;
    background:var(--off);
    border:1px solid var(--trace);
    border-radius:10px;
    padding:16px 18px;
    text-align:center;
  }
  .binary-sim-wrap .stat .k{
    font-size:10px;
    letter-spacing:0.15em;
    text-transform:uppercase;
    color:var(--dim);
    margin-bottom:8px;
  }
  .binary-sim-wrap .stat .v{
    font-family:'Space Grotesk', sans-serif;
    font-weight:700;
    font-size:clamp(20px,3.6vw,30px);
    color:var(--on);
  }
  .binary-sim-wrap .stat.result{
    flex:1 1 220px;
    border-color:var(--on);
    box-shadow:0 0 24px rgba(94,255,157,0.12);
  }
  .binary-sim-wrap .stat.result .v{ font-size:clamp(30px,5vw,44px); }

  .binary-sim-wrap .expr{
    text-align:center;
    color:var(--dim);
    font-size:clamp(10px,1.8vw,13px);
    margin-top:22px;
    line-height:1.9;
    word-break:break-word;
  }
  .binary-sim-wrap .expr .term{ color:var(--text); }
  .binary-sim-wrap .expr .term.zero{ color:var(--dim); opacity:0.5; }
  .binary-sim-wrap .expr .op{ color:var(--dim); margin:0 6px; }

  .binary-sim-wrap .actions{
    display:flex;
    gap:10px;
    justify-content:center;
    margin-top:24px;
    flex-wrap:wrap;
  }
  .binary-sim-wrap button.act{
    background:transparent;
    border:1px solid var(--trace);
    color:var(--dim);
    font-family:'JetBrains Mono', monospace;
    font-size:11px;
    letter-spacing:0.08em;
    text-transform:uppercase;
    padding:9px 16px;
    border-radius:8px;
    cursor:pointer;
    transition:all .15s ease;
  }
  .binary-sim-wrap button.act:hover{ color:var(--text); border-color:var(--dim); }
  .binary-sim-wrap button.act:disabled{ opacity:0.35; cursor:not-allowed; }
  .binary-sim-wrap button.act:disabled:hover{ color:var(--dim); border-color:var(--trace); }

  .binary-sim-wrap button.act.count{ color:var(--on); border-color:var(--trace); }
  .binary-sim-wrap button.act.count:hover{ border-color:var(--on); }

  .binary-sim-wrap div.footer{
    margin-top:34px;
    font-size:11px;
    color:var(--dim);
    text-align:center;
  }

  @media (prefers-reduced-motion: reduce){
    .binary-sim-wrap *{ transition:none !important; }
  }
</style>

<div class="binary-sim-wrap">

  <div class="eyebrow"></div>
  <h1>Binary <span>Simulator</span></h1>
  <div class="sub">Click a bit to flip it (0/1). Watch the simulator update live.</div>

  <div class="board">
    <div class="grid" id="grid-binsim"></div>
    <div class="expr" id="exprOut-binsim"></div>
    <div class="divider"></div>
    <div class="readout">
      <div class="stat">
        <div class="k">Binary</div>
        <div class="v" id="binOut-binsim">00000000</div>
      </div>
      <div class="stat">
        <div class="k">Hex</div>
        <div class="v" id="hexOut-binsim">0x00</div>
      </div>
      <div class="stat result">
        <div class="k">Decimal Result</div>
        <div class="v" id="decOut-binsim">0</div>
      </div>
    </div>
    <div class="actions">
      <button class="act count" id="downBtn-binsim">&minus; Count Down</button>
      <button class="act count" id="upBtn-binsim">Count Up &plus;</button>
    </div>
    <div class="actions">
      <button class="act" id="clearBtn-binsim">Clear</button>
      <button class="act" id="fillBtn-binsim">Set All</button>
      <button class="act" id="randBtn-binsim">Randomize</button>
    </div>
  </div>
  <div class="footer">8-bit register &middot; MSB (2⁷) on the left, LSB (2⁰) on the right</class>

</div>

<script>
(function(){
  const BIT_COUNT = 8;
  const MAX_VALUE = Math.pow(2, BIT_COUNT) - 1;
  const grid = document.getElementById('grid-binsim');
  const bits = new Array(BIT_COUNT).fill(0);
  const bitEls = [];

  for (let i = 0; i < BIT_COUNT; i++) {
    const exponent = BIT_COUNT - 1 - i;
    const placeValue = Math.pow(2, exponent);

    const col = document.createElement('div');
    col.className = 'col';

    const math = document.createElement('div');
    math.className = 'math';
    math.innerHTML = `2<sup>${exponent}</sup>`;

    const place = document.createElement('div');
    place.className = 'place';
    place.textContent = placeValue;

    const traceLine = document.createElement('div');
    traceLine.className = 'trace-line';

    const bitBtn = document.createElement('div');
    bitBtn.className = 'bit';
    bitBtn.textContent = '0';
    bitBtn.setAttribute('role', 'button');
    bitBtn.setAttribute('tabindex', '0');
    bitBtn.setAttribute('aria-label', `Bit for place value ${placeValue}, currently 0`);

    const label = document.createElement('div');
    label.className = 'bit-label';
    label.textContent = `bit ${exponent}`;

    const toggle = () => {
      bits[i] = bits[i] ? 0 : 1;
      render();
    };
    bitBtn.addEventListener('click', toggle);
    bitBtn.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(); }
    });

    col.appendChild(label);
    col.appendChild(traceLine);
    col.appendChild(bitBtn);
    col.appendChild(math);
    col.appendChild(place);
    grid.appendChild(col);

    bitEls.push({ col, bitBtn, exponent, placeValue });
  }

  function getDecimalValue() {
    let decimal = 0;
    for (let i = 0; i < BIT_COUNT; i++) {
      if (bits[i]) decimal += bitEls[i].placeValue;
    }
    return decimal;
  }

  function setDecimalValue(value) {
    for (let i = 0; i < BIT_COUNT; i++) {
      bits[i] = (value & bitEls[i].placeValue) ? 1 : 0;
    }
    render();
  }

  function render() {
    let decimal = 0;
    const exprParts = [];

    bitEls.forEach(({ col, bitBtn, exponent, placeValue }, i) => {
      const on = !!bits[i];
      bitBtn.textContent = String(bits[i]);
      bitBtn.classList.toggle('on', on);
      bitBtn.setAttribute('aria-label', `Bit for place value ${placeValue}, currently ${bits[i]}`);
      col.classList.toggle('active', on);
      if (on) decimal += placeValue;

      exprParts.push(
        `<span class="term ${on ? '' : 'zero'}">${bits[i]}&times;${placeValue}</span>`
      );
    });

    const binStr = bits.join('');
    document.getElementById('binOut-binsim').textContent = binStr;
    document.getElementById('hexOut-binsim').textContent = '0x' + decimal.toString(16).toUpperCase().padStart(2, '0');
    document.getElementById('decOut-binsim').textContent = decimal;
    document.getElementById('exprOut-binsim').innerHTML = exprParts.join('<span class="op">+</span>') + `<span class="op">=</span><span class="term">${decimal}</span>`;

    document.getElementById('upBtn-binsim').disabled = decimal >= MAX_VALUE;
    document.getElementById('downBtn-binsim').disabled = decimal <= 0;
  }

  document.getElementById('clearBtn-binsim').addEventListener('click', () => {
    for (let i = 0; i < BIT_COUNT; i++) bits[i] = 0;
    render();
  });
  document.getElementById('fillBtn-binsim').addEventListener('click', () => {
    for (let i = 0; i < BIT_COUNT; i++) bits[i] = 1;
    render();
  });
  document.getElementById('randBtn-binsim').addEventListener('click', () => {
    for (let i = 0; i < BIT_COUNT; i++) bits[i] = Math.random() < 0.5 ? 0 : 1;
    render();
  });
  document.getElementById('upBtn-binsim').addEventListener('click', () => {
    const current = getDecimalValue();
    if (current < MAX_VALUE) setDecimalValue(current + 1);
  });
  document.getElementById('downBtn-binsim').addEventListener('click', () => {
    const current = getDecimalValue();
    if (current > 0) setDecimalValue(current - 1);
  });

  render();
})();
</script>