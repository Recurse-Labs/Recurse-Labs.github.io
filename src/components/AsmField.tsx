/** Real lines from the loader in the listing, reused as texture. */
const POOL = [
  "endbr64",
  "push rbp",
  "mov rbp, rsp",
  "sub rsp, 0x40",
  "call resolve_api",
  "lea rcx, [rip+0x2f1]",
  "call imp.CreateMutexA",
  "mov eax, 0x9e3779b9",
  "xor edx, edx",
  "lea rsi, [rbp-0x40]",
  "call decrypt_config",
  "test eax, eax",
  "je 0x4010a0",
  "call imp.RegSetValueExA",
  "call imp.Sleep",
  "call beacon_init",
  "mov rcx, rax",
  "call imp.CreateProcessA",
  "xor eax, eax",
  "ret",
  "cmp byte [rdi], 0x73",
  "movzx eax, byte [rsi]",
  "jne 0x401100",
  "add rsp, 0x20",
];

const COLUMNS = 5;
const PER_COLUMN = 26;
/** Each column drifts at its own rate so the field never pulses in unison. */
const DURATIONS = [104, 137, 91, 149, 118];

/**
 * The constant motif: disassembly as a page-wide texture. Fixed behind the
 * content, so it stays put while the page scrolls and only shows through the
 * negative space. Purely atmospheric, so it is hidden from assistive tech.
 */
export default function AsmField() {
  return (
    <div className="asm-field" aria-hidden="true">
      {Array.from({ length: COLUMNS }, (_, c) => (
        <div
          className="asm-col"
          key={c}
          style={{ animationDuration: `${DURATIONS[c]}s`, opacity: c % 2 ? 0.15 : 0.26 }}
        >
          {Array.from({ length: PER_COLUMN * 2 }, (_, i) => {
            const idx = c * 7 + i;
            const addr = (0x401000 + idx * 4).toString(16);
            return (
              <span className="asm-ln" key={i}>
                <em>{`0x${addr}`}</em>
                {POOL[idx % POOL.length]}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}
