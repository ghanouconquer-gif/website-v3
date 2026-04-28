import Vapi from "@vapi-ai/web";

export function initVapiButton(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const publicKey = import.meta.env.VITE_VAPI_PUBLIC_KEY || "";
    const assistantId = import.meta.env.VITE_VAPI_ASSISTANT_ID || "";

    const vapi = new Vapi(publicKey);

    let state = "idle"; // idle | connecting | active | error
    let volume = 0;

    function render() {
        if (state === "idle") {
            container.innerHTML = `
                <div class="flex justify-center w-full my-8">
                    <button id="vapi-start-btn" class="font-mono text-sm uppercase tracking-widest px-8 py-4 bg-transparent text-white border border-white hover:bg-white hover:text-black transition-all">Talk to the AI Now</button>
                </div>
            `;
            document.getElementById("vapi-start-btn").addEventListener("click", () => {
                setState("connecting");
                vapi.start(assistantId).catch((err) => {
                    console.error("Vapi Start Error:", err);
                    setState("error");
                });
            });
        } else if (state === "connecting") {
            container.innerHTML = `
                <div class="flex justify-center w-full my-8">
                    <button disabled class="font-mono text-sm uppercase tracking-widest px-8 py-4 bg-transparent text-white border border-brand-gray opacity-50 cursor-not-allowed flex items-center gap-3">
                        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Connecting...
                    </button>
                </div>
            `;
        } else if (state === "active") {
            container.innerHTML = `
                <div class="flex flex-col items-center gap-6 py-12 px-6 border border-[#00FF94]/30 rounded bg-[#00FF94]/5 w-full max-w-sm mx-auto my-8">
                    <div class="flex items-center gap-4 border border-[#00FF94]/20 px-6 py-2 rounded-full mb-4">
                        <div class="relative w-3 h-3 flex items-center justify-center">
                            <span id="vapi-volume-ring" class="absolute inline-flex h-6 w-6 rounded-full bg-[#00FF94] opacity-50 transition-transform duration-75"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-[#00FF94]"></span>
                        </div>
                        <span class="font-mono text-[#00FF94] uppercase tracking-widest text-sm font-bold">Live — AI is listening</span>
                    </div>
                    <button id="vapi-stop-btn" class="font-mono text-sm uppercase tracking-widest px-8 py-3 bg-red-600/10 text-red-500 border border-red-500 hover:bg-red-500 hover:text-white transition-all w-full max-w-[200px]">End Call</button>
                </div>
            `;
            document.getElementById("vapi-stop-btn").addEventListener("click", () => {
                vapi.stop();
                setState("idle");
            });
        } else if (state === "error") {
            container.innerHTML = `
                <div class="flex flex-col items-center gap-6 w-full max-w-sm mx-auto my-8 p-6 border border-red-500/20 bg-red-500/5">
                    <p class="font-mono text-red-500 font-bold uppercase tracking-widest text-sm text-center">Connection failed. Try again.</p>
                    <button id="vapi-retry-btn" class="font-mono text-sm uppercase tracking-widest px-8 py-4 bg-transparent text-white border border-white hover:bg-white hover:text-black transition-all">Retry</button>
                </div>
            `;
            document.getElementById("vapi-retry-btn").addEventListener("click", () => {
                setState("connecting");
                vapi.start(assistantId).catch((err) => {
                    console.error("Vapi Retry Error:", err);
                    setState("error");
                });
            });
        }
    }

    function setState(newState) {
        state = newState;
        render();
    }

    // Events
    vapi.on("call-start", () => setState("active"));
    vapi.on("call-end", () => setState("idle"));
    vapi.on("volume-level", (vol) => {
        if (state === "active") {
            const ring = document.getElementById("vapi-volume-ring");
            if (ring) {
                // scale using volume. volume usually 0 to 1
                const scale = 1 + (vol * 3);
                ring.style.transform = `scale(${scale})`;
            }
        }
    });

    let aiSpeaking = false;
    vapi.on("speech-start", () => { aiSpeaking = true; });
    vapi.on("speech-end", () => { aiSpeaking = false; });

    vapi.on("error", (e) => {
        console.error("Vapi Event Error:", e);
        setState("error");
    });

    // Initial render
    render();
}
