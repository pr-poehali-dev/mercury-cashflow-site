import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-blue-deep via-blue-600 to-primary text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(59, 130, 246, 0.8)), url('/img/8f207444-ee50-4942-a927-0f01ce9ed027.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-deep/40 to-primary/40"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            Войди в <span className="text-gold animate-float">Поток Изобилия</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light opacity-90">
            Создай жизнь, о которой мечтаешь: больше дохода, больше свободы, больше возможностей.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold/90 text-black font-semibold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-gold/25 transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://t.me/cashflowInfinite', '_blank')}
          >
            <Icon name="Users" className="mr-2" size={20} />
            Присоединиться к сообществу
          </Button>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-gold rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-white rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-gold rounded-full animate-float opacity-50" style={{animationDelay: '2s'}}></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              О нас
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              <strong className="text-gold">"Денежные потоки"</strong> — это не просто чат или проект, это сообщество людей, которые выбирают жить в изобилии. 
              Мы помогаем участникам:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              { icon: "TrendingUp", title: "Приумножать доход", desc: "Изучаем проверенные стратегии увеличения заработка" },
              { icon: "Coins", title: "Пассивные источники", desc: "Создаем потоки дохода, работающие без вашего участия" },
              { icon: "Target", title: "Финансовая свобода", desc: "Достигаем независимости от денежных ограничений" },
              { icon: "Star", title: "Реализация мечт", desc: "Воплощаем желания без финансовых барьеров" }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} className="text-gold" size={28} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-deep to-primary text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Почему мы?
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { icon: "Users2", title: "Индивидуальное наставничество", desc: "Опытные участники делятся проверенными стратегиями" },
                { icon: "CheckCircle", title: "Проверенные методы заработка", desc: "Никакой теории ради теории, только рабочие схемы" },
                { icon: "Heart", title: "Сообщество поддержки", desc: "Окружение, которое вдохновляет и ведёт к результату" },
                { icon: "Brain", title: "Финансовое мышление", desc: "Учим мыслить как миллионер, чтобы деньги сами находили путь к вам" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gold/20 p-3 rounded-full flex-shrink-0">
                    <Icon name={item.icon} className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-blue-50 opacity-90">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <Icon name="Award" className="text-gold mx-auto mb-4" size={64} />
                  <h3 className="font-heading text-2xl font-bold mb-4">Результат гарантирован</h3>
                  <p className="text-blue-50">При следовании нашим рекомендациям вы увидите первые результаты уже через месяц</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Как это работает
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              { number: "01", title: "Регистрируешься в сообществе", desc: "Простая регистрация займет всего минуту" },
              { number: "02", title: "Получаешь доступ к материалам", desc: "Чат, курсы, наставники - все в одном месте" },
              { number: "03", title: "Следуешь пошаговому плану", desc: "Индивидуальный план по увеличению дохода" },
              { number: "04", title: "Воплощаешь финансовые цели", desc: "Достигаешь финансовой свободы и независимости" }
            ].map((step, index) => (
              <div key={index} className="flex items-center mb-12 last:mb-0">
                <div className="bg-gold text-black font-heading font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 mr-8">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute left-8 mt-20">
                    <Icon name="ArrowDown" className="text-gold" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Отзывы участников
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Анна К.", result: "Увеличила доход в 3 раза", text: "За 6 месяцев смогла закрыть все кредиты и начать путешествовать. Сообщество дало мне не только знания, но и веру в себя!" },
              { name: "Михаил П.", result: "Создал пассивный доход", text: "Теперь деньги работают на меня, а не я на деньги. Запустил 3 источника пассивного дохода по рекомендациям наставников." },
              { name: "Елена С.", result: "Финансовая свобода", text: "Больше не завися от зарплаты. Мое мышление кардинально изменилось, и результаты не заставили себя ждать!" }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Icon name="User" className="text-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gold text-sm">{testimonial.result}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-gold fill-current" size={16} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold via-yellow-400 to-gold text-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Присоединяйся сегодня
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Твоя жизнь может измениться уже сегодня. Сделай шаг в Поток и открой для себя мир возможностей, 
            о которых раньше только мечтал.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-deep hover:bg-blue-deep/90 text-white font-semibold px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-blue-deep/25 transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://t.me/cashflowInfinite', '_blank')}
          >
            <Icon name="Zap" className="mr-3" size={24} />
            Хочу в Потоки!
          </Button>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-black/70">
            <div className="flex items-center">
              <Icon name="Shield" className="mr-2" size={20} />
              <span>Гарантия результата</span>
            </div>
            <div className="flex items-center">
              <Icon name="Clock" className="mr-2" size={20} />
              <span>Быстрый старт</span>
            </div>
            <div className="flex items-center">
              <Icon name="Users" className="mr-2" size={20} />
              <span>Поддержка 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-deep text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="font-heading text-2xl font-bold mb-4">
              <span className="text-gold">Денежные потоки</span> — сообщество финансовой свободы
            </h3>
            <p className="text-blue-50 mb-6">Создаем будущее без финансовых ограничений</p>
            <div className="flex justify-center space-x-6">
              <Icon name="Mail" className="text-gold hover:text-white cursor-pointer transition-colors" size={24} />
              <Icon name="Phone" className="text-gold hover:text-white cursor-pointer transition-colors" size={24} />
              <Icon name="MessageCircle" className="text-gold hover:text-white cursor-pointer transition-colors" size={24} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;