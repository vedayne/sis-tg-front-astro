import React, { useState } from 'react';
import { BaseModal } from '../../shared/modals/BaseModal';
import { AlertTriangle, Lock, LogOut, Save } from 'lucide-react';

export const ChangePasswordFirstModal = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null)
  };

  const handleCancel = () => {
    window.location.href = '/sign-in'; 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.newPassword !== formData.confirmPassword) {
      setError('Las nuevas contraseñas no coinciden.');
      setIsLoading(false);
      return;
    }

    if (formData.newPassword.length < 8) {
        setError('La contraseña debe tener al menos 8 caracteres.');
        setIsLoading(false);
        return;
    }

    try {
      console.log('Enviando cambio de contraseña...', formData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsOpen(false); 
    } catch (err) {
      setError('Ocurrió un error al actualizar. Intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={handleCancel}
      showCloseIcon={false}
      preventCloseOnOutsideClick={true}
      title="Actualización de Seguridad"
    >
      <form onSubmit={handleSubmit} className="space-y-5 text-slate-700">
        
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-md flex gap-3 items-start">
          <AlertTriangle className="text-amber-500 shrink-0" size={20} />
          <div className="text-sm">
            <p className="font-medium text-amber-800">Cambio de contraseña requerido</p>
            <p className="text-amber-700 mt-1">
              Al ser tu primer inicio de sesión, es obligatorio establecer una nueva contraseña segura.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña Actual</label>
            <div className="relative">
                <Lock className="absolute left-3 top-2.5 text-slate-400" size={18}/>
                <input
                type="password"
                name="oldPassword"
                required
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="••••••••"
                onChange={handleInputChange}
                />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nueva Contraseña</label>
                <input
                type="password"
                name="newPassword"
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Nueva clave"
                onChange={handleInputChange}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Confirmar</label>
                <input
                type="password"
                name="confirmPassword"
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Repetir clave"
                onChange={handleInputChange}
                />
            </div>
          </div>
        </div>

        {error && (
            <div className="text-red-500 text-sm bg-red-50 p-2 rounded border border-red-100 text-center">
                {error}
            </div>
        )}

        <div className="flex items-center justify-end gap-3 pt-2 mt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={handleCancel}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <LogOut size={16} />
            Cancelar y Salir
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center gap-2 px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Guardando...' : (
                <>
                    <Save size={16} />
                    Cambiar Contraseña
                </>
            )}
          </button>
        </div>
      </form>
    </BaseModal>
  );
};