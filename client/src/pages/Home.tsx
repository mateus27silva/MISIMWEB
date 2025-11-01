import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Zap, Users, BarChart3, ArrowRight } from "lucide-react";
import { APP_LOGO, APP_TITLE, getLoginUrl } from "@/const";
import { Link } from "wouter";

const PRICING_PLANS = [
  {
    id: "inicial",
    name: "Inicial",
    price: "R$ 99",
    period: "/mês",
    description: "Perfeito para iniciantes",
    simulations: "10 simulações",
    complexity: "Baixa complexidade",
    support: "Email",
    features: [
      "10 simulações por mês",
      "Simulações de baixa complexidade",
      "Acesso básico ao simulador",
      "Suporte por email",
      "Histórico de 30 dias",
    ],
    cta: "Começar Agora",
    highlighted: false,
  },
  {
    id: "profissional",
    name: "Profissional",
    price: "R$ 299",
    period: "/mês",
    description: "Para profissionais",
    simulations: "50 simulações",
    complexity: "Média complexidade",
    support: "Prioridade",
    features: [
      "50 simulações por mês",
      "Simulações de média complexidade",
      "Acesso completo ao simulador",
      "Suporte prioritário",
      "Histórico de 90 dias",
      "Exportação de relatórios",
      "API de integração",
    ],
    cta: "Escolher Plano",
    highlighted: true,
  },
  {
    id: "empresarial",
    name: "Empresarial",
    price: "Personalizado",
    period: "",
    description: "Para empresas",
    simulations: "Ilimitado",
    complexity: "Todas as complexidades",
    support: "24/7",
    features: [
      "Simulações ilimitadas",
      "Todas as complexidades",
      "Acesso total ao simulador",
      "Suporte 24/7 dedicado",
      "Histórico ilimitado",
      "Exportação avançada",
      "API completa",
      "Treinamento customizado",
      "SLA garantido",
    ],
    cta: "Contatar Vendas",
    highlighted: false,
  },
];

const FAQ_ITEMS = [
  {
    question: "O que é MISIM?",
    answer:
      "MISIM é uma plataforma de simulação de processos metalúrgicos que permite simular balanços de massa, flotação e outros processos de beneficiamento de minério.",
  },
  {
    question: "Posso cancelar minha assinatura a qualquer momento?",
    answer:
      "Sim, você pode cancelar sua assinatura a qualquer momento. O acesso será mantido até o final do período de faturamento atual.",
  },
  {
    question: "Qual é a diferença entre os planos?",
    answer:
      "Os planos diferem no número de simulações permitidas por mês, complexidade dos modelos suportados e nível de suporte. Veja a tabela de comparação acima para detalhes.",
  },
  {
    question: "Posso fazer upgrade ou downgrade de plano?",
    answer:
      "Sim, você pode mudar de plano a qualquer momento. A mudança será refletida na próxima data de faturamento.",
  },
  {
    question: "Os dados das minhas simulações são seguros?",
    answer:
      "Sim, todos os dados são criptografados em trânsito e em repouso. Nós seguimos as melhores práticas de segurança da indústria.",
  },
  {
    question: "Existe período de teste gratuito?",
    answer:
      "Sim, oferecemos um período de teste gratuito de 14 dias com acesso completo ao plano Profissional. Nenhum cartão de crédito é necessário.",
  },
];

export default function Home() {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {APP_LOGO && <img src={APP_LOGO} alt={APP_TITLE} className="h-8 w-8" />}
            <span className="text-xl font-bold text-white">{APP_TITLE}</span>
          </div>
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <Link href="/dashboard">
                <Button>Dashboard</Button>
              </Link>
            ) : (
              <a href={getLoginUrl()}>
                <Button>Entrar</Button>
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Simule Processos Metalúrgicos com Precisão
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            MISIM é a plataforma completa para simulação de balanços de massa, flotação e otimização de processos de beneficiamento de minério.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={getLoginUrl()}>
              <Button size="lg" className="gap-2">
                Começar Gratuitamente
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <Button size="lg" variant="outline">
              Ver Demo
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <Zap className="w-8 h-8 text-blue-500 mb-2" />
              <CardTitle className="text-white">Rápido e Preciso</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300">
              Simulações em tempo real com algoritmos avançados para resultados precisos.
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <BarChart3 className="w-8 h-8 text-green-500 mb-2" />
              <CardTitle className="text-white">Análise Completa</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300">
              Balanço de massa, análise econômica e otimização em uma única plataforma.
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <Users className="w-8 h-8 text-purple-500 mb-2" />
              <CardTitle className="text-white">Suporte Dedicado</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300">
              Equipe especializada pronta para ajudar com suas simulações e análises.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Planos de Assinatura</h2>
          <p className="text-xl text-slate-300">
            Escolha o plano perfeito para suas necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => (
            <Card
              key={plan.id}
              className={`relative flex flex-col ${
                plan.highlighted
                  ? "bg-gradient-to-br from-blue-600 to-blue-700 border-blue-500 ring-2 ring-blue-500 scale-105"
                  : "bg-slate-800 border-slate-700"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Popular
                </div>
              )}

              <CardHeader>
                <CardTitle
                  className={plan.highlighted ? "text-white" : "text-white"}
                >
                  {plan.name}
                </CardTitle>
                <CardDescription
                  className={
                    plan.highlighted ? "text-blue-100" : "text-slate-400"
                  }
                >
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <div className="mb-6">
                  <div className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-white"}`}>
                    {plan.price}
                  </div>
                  <div className={plan.highlighted ? "text-blue-100" : "text-slate-400"}>
                    {plan.period}
                  </div>
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? "text-white" : "text-green-500"}`} />
                      <span className={plan.highlighted ? "text-white" : "text-slate-300"}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a href={getLoginUrl()}>
                  <Button
                    className="w-full"
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Perguntas Frequentes</h2>
          <p className="text-xl text-slate-300">
            Encontre respostas para as perguntas mais comuns
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-slate-800 border-slate-700 px-6 rounded-lg"
              >
                <AccordionTrigger className="text-white hover:text-blue-400">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a centenas de profissionais que já confiam em MISIM
          </p>
          <a href={getLoginUrl()}>
            <Button size="lg" variant="secondary">
              Criar Conta Gratuita
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 py-8">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>&copy; 2025 MISIM. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

