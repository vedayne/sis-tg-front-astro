<script lang="ts">
    import { actions } from "astro:actions";


let passwordInput: HTMLInputElement | null = $state(null)
let eyeOpen: SVGElement | null = $state(null)
let eyeClosed: SVGElement | null = $state(null)

const togglePassword = () => {
    if (passwordInput?.type === 'password') {
        passwordInput.type = 'text';
        eyeOpen?.classList.add('hidden');
        eyeClosed?.classList.remove('hidden');
    } else {
        passwordInput!.type = 'password';
        eyeOpen?.classList.remove('hidden');
        eyeClosed?.classList.add('hidden');
    }
}

const onSubmit = async (event: SubmitEvent) => {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    console.log(formData.get('email'))
    console.log(formData.get('password'))
    console.log({ formData })
    console.log('submit')

    const { error } = await actions.signInAction( formData )

    if ( error ) {
      //updateFieldErrors( error )
      console.log({ error })
      return
    }

    window.location.href = '/admin'
}

</script>

<div class="glass-form rounded-2xl p-8 space-y-6">
    <form onsubmit={onSubmit}>
                
    <!-- Email -->
    <div>
        <label for="email" class="block text-sm font-semibold text-blue-900 mb-2">
            Correo Institucional
            <span class="tooltip inline-block ml-1 text-yellow-400 cursor-help">
                ?
                <span class="tooltip-text">Usa tu correo institucional de EMI</span>
            </span>
        </label>
        <input 
            type="email" 
            id="email"
            name="email"
            placeholder="ejemplo@est.emi.edu.bo"
            class="w-full input-glass rounded-lg px-4 py-3 text-blue-900 placeholder-slate-400"
        />
    </div>

    <!-- Password con Toggle -->
    <div>
        <label for="password" class="block text-sm font-semibold text-blue-900 mb-2">
            Contraseña
            <span class="tooltip inline-block ml-1 text-yellow-400 cursor-help">
                ?
                <span class="tooltip-text">Contraseña segura de tu cuenta</span>
            </span>
        </label>
        <div class="relative">
            <input
                bind:this={passwordInput}
                type="password" 
                id="password"
                name="password"
                placeholder="••••••••"
                class="w-full input-glass rounded-lg px-4 py-3 pr-12 text-blue-900 placeholder-slate-400"
            />
            <!-- Toggle Eye Icon -->
            <button 
                type="button" 
                onclick={togglePassword}
                class="absolute right-4 top-1/2 transform -translate-y-1/2 toggle-password"
                aria-label="Mostrar/Ocultar contraseña"
            >
                <!-- Ojo Abierto -->
                <svg bind:this={eyeOpen} id="eyeOpen" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 5C7 5 2.73 8.11 1 12.46c1.73 4.35 6 7.54 11 7.54s9.27-3.19 11-7.54C21.27 8.11 17 5 12 5m0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                </svg>
                <!-- Ojo Cerrado -->
                <svg bind:this={eyeClosed} id="eyeClosed" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.83 9L15.23 12.39c.75-1.48.75-3.18 0-4.67L11.83 9m7.07-2.07c2.33 2.33 3.49 5.77 2.34 8.9l2.73 2.73c1.54-1.35 2.88-3.02 3.69-4.92-3.87-6.48-10.66-10.56-18.38-10.56-1.63 0-3.22.2-4.75.57l2.98 2.98c3.12-1.15 6.56 0 8.9 2.34M2.01 3.87L3.13 2.75 19.35 18.97l-1.12 1.11L2.01 3.87m5.82 5.82L7.07 11.71c-.38.75-.38 1.6 0 2.35l.76.76c.75.38 1.6.38 2.35 0l.76-.76c.38-.75.38-1.6 0-2.35l-.76-.76c-.75-.38-1.6-.38-2.35 0z"/>
                </svg>
            </button>
        </div>
    </div>

    <!-- Recuérdame & Olvide Contraseña -->
    <div class="flex items-center justify-between text-sm">
        <label class="flex items-center gap-2 cursor-pointer">
            <input 
                type="checkbox" 
                class="w-4 h-4 rounded border-slate-300 text-yellow-400 focus:ring-yellow-400"
            />
            <span class="text-slate-700">Recuérdame</span>
        </label>
        <a href="#" class="link-hover">¿Olvidaste tu contraseña?</a>
    </div>

    <!-- Botón Login -->
    <button class="btn-gold w-full py-3 rounded-lg font-semibold text-blue-900 text-lg transition hover:shadow-lg" type="submit">
        Iniciar Sesión
    </button>
    </form>

    <!-- Divider -->
    <div class="flex items-center gap-4">
        <div class="flex-1 h-px bg-slate-200"></div>
        <span class="text-slate-500 text-xs">O continúa con</span>
        <div class="flex-1 h-px bg-slate-200"></div>
    </div>

    <!-- Botones Rápidos -->
    <div class="grid grid-cols-2 gap-3">
        <a href="#" class="border-2 border-blue-200 rounded-lg py-2 text-center font-semibold text-blue-900 hover:bg-blue-50 transition">
            Repositorio Grado
        </a>
        <a href="#" class="border-2 border-blue-200 rounded-lg py-2 text-center font-semibold text-blue-900 hover:bg-blue-50 transition">
            Postgrado
        </a>
    </div>
</div>

<style>
    * {
        font-family: 'Geist', sans-serif;
    }

    .playfair {
        font-family: 'Playfair Display', serif;
    }

    /* Animaciones personalizadas */
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes pulse-gold {
        0%, 100% {
            box-shadow: 0 0 0 0 rgba(250, 204, 21, 0.4);
        }
        50% {
            box-shadow: 0 0 0 10px rgba(250, 204, 21, 0);
        }
    }

    @keyframes glow {
        0%, 100% {
            text-shadow: 0 0 10px rgba(250, 204, 21, 0.5);
        }
        50% {
            text-shadow: 0 0 20px rgba(250, 204, 21, 0.8);
        }
    }

    .slide-up {
        animation: slideUp 0.8s ease-out forwards;
    }

    .pulse-gold {
        animation: pulse-gold 2s infinite;
    }

    .glow-text {
        animation: glow 2s ease-in-out infinite;
    }

    /* Glassmorphism mejorado */
    .glass-form {
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1.5px solid rgba(250, 204, 21, 0.3);
        box-shadow: 0 8px 32px 0 rgba(10, 29, 69, 0.1);
    }

    /* Input con bordes sutiles neon */
    .input-glass {
        background: rgba(255, 255, 255, 0.9);
        border: 1.5px solid rgba(220, 222, 224, 0.6);
        transition: all 0.3s ease;
    }

    .input-glass:focus {
        background: rgba(255, 255, 255, 0.95);
        border-color: rgba(250, 204, 21, 0.8);
        box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.1);
        outline: none;
    }

    /* Botón CTA */
    .btn-gold {
        background: linear-gradient(135deg, #facc15 0%, #eab308 100%);
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(250, 204, 21, 0.3);
    }

    .btn-gold:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(250, 204, 21, 0.4);
    }

    .btn-gold:active {
        transform: translateY(0);
    }

    /* Toggle password */
    .toggle-password {
        cursor: pointer;
        transition: all 0.2s ease;
        color: #0f2c66;
    }

    .toggle-password:hover {
        color: #facc15;
    }

    /* Tooltip */
    .tooltip {
        position: relative;
        cursor: help;
    }

    .tooltip-text {
        visibility: hidden;
        background-color: #0f2c66;
        color: white;
        text-align: center;
        padding: 8px 12px;
        border-radius: 6px;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        margin-left: -60px;
        width: 120px;
        opacity: 0;
        transition: opacity 0.3s;
        font-size: 12px;
        border: 1px solid rgba(250, 204, 21, 0.3);
    }

    .tooltip-text::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #0f2c66 transparent transparent transparent;
    }

    .tooltip:hover .tooltip-text {
        visibility: visible;
        opacity: 1;
    }

    /* Link hover */
    .link-hover {
        position: relative;
        text-decoration: none;
        color: #0f2c66;
        transition: color 0.3s ease;
    }

    .link-hover::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: #facc15;
        transition: width 0.3s ease;
    }

    .link-hover:hover {
        color: #facc15;
    }

    .link-hover:hover::after {
        width: 100%;
    }

    /* Responsive */
    @media (max-width: 640px) {
        .glass-form {
            margin: 0 16px;
        }
    }
</style>