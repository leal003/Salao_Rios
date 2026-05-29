import React, { useState } from 'react';
import { Calendar, Clock, Phone, User } from 'lucide-react';
import { toast } from 'sonner';

interface AppointmentFormProps {
  className?: string;
  id?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ className = '', id }) => {
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
  });

  const services = [
    'Corte masculino',
    'Corte feminino',
    'Corte infantil',
    'Barba',
    'Escova',
    'Hidratação',
    'Sobrancelha',
    'Química capilar',
  ];

  const times = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00', '18:00',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.service || !formData.date || !formData.time || !formData.name || !formData.phone) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    toast.success('Agendamento solicitado com sucesso! Entraremos em contato para confirmação.');

    setFormData({
      service: '',
      date: '',
      time: '',
      name: '',
      phone: '',
    });
  };

  const fieldClass = 'w-full h-[clamp(2.25rem,6vh,2.75rem)] min-w-0 px-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0008] focus:border-transparent bg-white';
  const iconFieldClass = 'w-full h-[clamp(2.25rem,6vh,2.75rem)] min-w-0 pl-9 pr-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0008] focus:border-transparent bg-white';

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={`scroll-mt-24 bg-white rounded-2xl shadow-xl p-[clamp(1rem,3vh,1.75rem)] w-full max-w-[min(430px,92vw)] lg:max-w-[clamp(360px,31vw,430px)] mx-auto lg:mx-0 ${className}`}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="mb-[clamp(0.75rem,2.5vh,1.25rem)]">
        <h3 className="text-[clamp(1.05rem,2.5vh,1.25rem)] font-bold text-[#211A1A] mb-1">Agende seu horário</h3>
        <p className="text-xs sm:text-sm text-[#6B5F5F]">Atendimento presencial</p>
      </div>

      <div className="space-y-[clamp(0.55rem,1.8vh,0.875rem)]">
        <div>
          <label className="block text-xs font-medium text-[#6B5F5F] mb-[clamp(0.25rem,0.9vh,0.375rem)]">
            Serviço
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className={fieldClass}
            required
          >
            <option value="">Escolha o serviço desejado</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="min-w-0">
            <label className="block text-xs font-medium text-[#6B5F5F] mb-[clamp(0.25rem,0.9vh,0.375rem)]">
              Data
            </label>
            <div className="relative min-w-0">
              <Calendar className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className={iconFieldClass}
                required
              />
            </div>
          </div>

          <div className="min-w-0">
            <label className="block text-xs font-medium text-[#6B5F5F] mb-[clamp(0.25rem,0.9vh,0.375rem)]">
              Horário
            </label>
            <div className="relative min-w-0">
              <Clock className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className={`${iconFieldClass} appearance-none`}
                required
              >
                <option value="">Horário</option>
                {times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#6B5F5F] mb-[clamp(0.25rem,0.9vh,0.375rem)]">
            Nome
          </label>
          <div className="relative">
            <User className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Digite seu nome"
              className={iconFieldClass}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-[#6B5F5F] mb-[clamp(0.25rem,0.9vh,0.375rem)]">
            Telefone
          </label>
          <div className="relative">
            <Phone className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(XX) XXXXX-XXXX"
              className={iconFieldClass}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-5 py-[clamp(0.65rem,1.8vh,0.75rem)] bg-[#8B0008] text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-[#6B0006] transition-all mt-[clamp(0.25rem,1vh,0.5rem)]"
        >
          Confirmar agendamento
        </button>
      </div>
    </form>
  );
};
