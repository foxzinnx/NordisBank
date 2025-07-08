"use client"
import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  Settings, 
  Eye, 
  EyeOff, 
  Send, 
  Download, 
  CreditCard, 
  TrendingUp, 
  Zap,
  ArrowUpRight,
  ArrowDownLeft,
  Sparkles,
  Wallet,
  Shield,
  Star,
  ChevronDown,
  QrCode,
  UserCheck,
  Plus,
  Pencil
} from 'lucide-react';
import { user } from '@/data/user';


export const Home = () => {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [greetings, setGreetings] = useState('Bom dia');
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(new Date());
  const [userName, setUserName] = useState(user.name);
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(user.name)

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
        const hour = new Date().getHours();

        if(hour >= 6 && hour < 12){
            setGreetings('Bom dia');
        } else if(hour >= 12 && hour < 18){
            setGreetings('Boa tarde');
        } else {
            setGreetings('Boa noite');
        }
    }, []);

    const handleNameSave = () => {
        if (tempName.trim()) {
        setUserName(tempName.trim());
        setIsEditingName(false);
        }
    }

    const handleNameCancel = () => {
        setTempName(userName);
        setIsEditingName(false);
    };

    const formatDisplayName = (name: string) => {
        const nameParts = name.split(' ');
        if (nameParts.length >= 2) {
        return `${nameParts[0]} ${nameParts[1].charAt(0)}`;
        }
        return nameParts[0];
    };

  const quickActions = [
    { 
      icon: <Send className="w-6 h-6" />, 
      label: 'Enviar', 
      bg: 'bg-purple-600',
      hover: 'hover:bg-purple-700'
    },
    { 
      icon: <Download className="w-6 h-6" />, 
      label: 'Receber', 
      bg: 'bg-black',
      hover: 'hover:bg-gray-800'
    },
    { 
      icon: <QrCode className="w-6 h-6" />, 
      label: 'Pix', 
      bg: 'bg-purple-500',
      hover: 'hover:bg-purple-600'
    },
    { 
      icon: <TrendingUp className="w-6 h-6" />, 
      label: 'Investir', 
      bg: 'bg-gray-800',
      hover: 'hover:bg-gray-900'
    },
    { 
      icon: <CreditCard className="w-6 h-6" />, 
      label: 'Cartão', 
      bg: 'bg-purple-700',
      hover: 'hover:bg-purple-800'
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      label: 'Seguro', 
      bg: 'bg-gray-700',
      hover: 'hover:bg-gray-800'
    }
  ];

  const transactions = [
    {
      id: 1,
      name: 'Alan Dyogo',
      category: 'Transferência',
      date: '29 de Fev',
      time: '14:30',
      amount: -250.00,
      type: 'transfer'
    },
    {
      id: 2,
      name: 'Salário Mensal',
      category: 'Receita',
      date: '28 de Fev',
      time: '09:00',
      amount: 4500.00,
      type: 'income'
    },
    {
      id: 3,
      name: 'Supermercado Extra',
      category: 'Compras',
      date: '27 de Fev',
      time: '18:45',
      amount: -120.50,
      type: 'expense'
    }
  ];

  const stats = [
    {
      title: 'Gastos este mês',
      value: 'R$ 2.340,80',
      change: '-12%',
      positive: true,
      icon: <ArrowDownLeft className="w-5 h-5" />
    },
    {
      title: 'Receitas',
      value: 'R$ 7.500,00',
      change: '+8%',
      positive: true,
      icon: <ArrowUpRight className="w-5 h-5" />
    },
    {
      title: 'Investimentos',
      value: 'R$ 15.420,30',
      change: '+23%',
      positive: true,
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Segurança Avançada',
      description: 'Biometria e criptografia de ponta',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Pagamentos Instantâneos',
      description: 'Pix 24h sem taxas',
      color: 'bg-gray-100 text-gray-700'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Cashback Premium',
      description: 'Até 5% de volta em compras',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <header className="relative bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/25">
                <span className="text-white font-bold text-lg">{userName.split(' ')[0]?.charAt(0)}{userName.split(' ')[1]?.charAt(0)}</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div>
              <p className="text-gray-500 font-medium text-sm">Boa noite ✨</p>
              <div className='flex items-center gap-2'>
                <button 
                    onClick={() => setIsEditingName(true)}
                    className="font-bold text-black text-lg hover:text-purple-600 transition-colors text-left"
                >
                    {formatDisplayName(userName)}
                </button>
                <Pencil onClick={() => setIsEditingName(true)} size={14}/>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-gray-600 text-sm text-right">
              <p className="font-semibold">{time.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</p>
              <p className="text-xs">{time.toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric', month: 'short' })}</p>
            </div>
            <button className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all">
              <Bell className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-3 rounded-xl bg-purple-100 hover:bg-purple-200 transition-all">
              <Settings className="w-5 h-5 text-purple-600" />
            </button>
          </div>
        </div>
      </header>

      <main className="relative p-4 space-y-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-br from-black to-gray-900 rounded-3xl p-6 shadow-2xl shadow-black/20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-600 rounded-xl">
                  <Wallet className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Saldo total</p>
                  <p className="text-gray-400 text-xs">Atualizado agora</p>
                </div>
              </div>
              <button 
                onClick={() => setBalanceVisible(!balanceVisible)}
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all"
              >
                {balanceVisible ? <EyeOff className="w-5 h-5 text-white" /> : <Eye className="w-5 h-5 text-white" />}
              </button>
            </div>
            
            <div className="mb-4 leading-9">
              <span className="text-[42px] font-bold text-white tracking-tight">
                {balanceVisible ? 'R$ 7.928,60' : 'R$ ••••••••'}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 text-purple-400">
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-sm font-medium">+2.5%</span>
              </div>
              <span className="text-gray-300 text-sm">vs mês anterior</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex space-x-3 overflow-x-auto scrollbar-hide pb-2">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className={`${action.bg} ${action.hover} flex-shrink-0 w-24 h-24 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex flex-col items-center justify-center h-full space-y-2">
                  <div className="p-1 bg-white/20 rounded-lg">
                    <div className="p-[2px]">
                      {action.icon}
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium leading-tight text-center px-1">{action.label}</span>
                </div>
              </button>
            ))}
          </div>
          
          <div className="absolute right-0 top-0 bottom-0 w-7 bg-gradient-to-l from-white/30 to-transparent pointer-events-none sm:hidden"></div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 border border-gray-200 hover:border-purple-300 transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-xl">
                    <div className="text-purple-600">
                      {stat.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">{stat.title}</p>
                    <p className="text-black font-bold text-lg">{stat.value}</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  stat.positive ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-6 text-white shadow-2xl shadow-purple-500/25">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 animate-pulse" style={{animationDelay: '1s'}}></div>
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-white/20 rounded-xl">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <p className="text-white/90 text-sm">Nordis Premium</p>
                <p className="font-bold text-lg">****8228</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-white fill-current" />
              <span className="text-sm font-medium">Premium</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-bold text-black mb-4">Recursos exclusivos</h3>
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-4 border border-gray-200 hover:border-purple-300 transition-all hover:shadow-md"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl ${feature.color}`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-black">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
                <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-purple-100 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-purple-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-black">Atividade recente</h3>
            <button className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors flex items-center space-x-1">
              <span>Ver todas</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-4">
            {transactions.map((transaction, index) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    transaction.type === 'income' ? 'bg-purple-100 text-purple-600' : 
                    transaction.type === 'expense' ? 'bg-gray-100 text-gray-600' : 'bg-black text-white'
                  }`}>
                    {transaction.type === 'income' ? <ArrowDownLeft className="w-5 h-5" /> : 
                     transaction.type === 'expense' ? <ArrowUpRight className="w-5 h-5" /> : <UserCheck className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="font-medium text-black">{transaction.name}</p>
                    <p className="text-sm text-gray-600">{transaction.category} • {transaction.date} {transaction.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`font-bold ${
                    transaction.amount > 0 ? 'text-purple-600' : 'text-black'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}R$ {Math.abs(transaction.amount).toFixed(2)}
                  </span>
                  <p className="text-xs text-gray-400">Concluído</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isEditingName && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-black">Editar Nome</h3>
                <button
                  onClick={handleNameCancel}
                  className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="Digite seu nome completo"
                    autoFocus
                  />
                </div>
                
                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-2">Visualização:</p>
                  <p className="font-bold text-black text-lg">
                    {tempName.trim() ? formatDisplayName(tempName.trim()) : 'Nome'}
                  </p>
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={handleNameCancel}
                    className="flex-1 py-3 px-4 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleNameSave}
                    className="flex-1 py-3 px-4 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition-all"
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};