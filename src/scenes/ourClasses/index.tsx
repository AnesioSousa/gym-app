import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import HText from '@/shared/HText'
import { ClassType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import Class from './Class'

const classes: Array<ClassType> = [
  {
    name: 'Aulas de Treinamento com Pesos',
    description:
      'Nossas aulas de treinamento com pesos são projetadas para ajudá-lo a construir força, tonificar músculos e melhorar o condicionamento físico geral. Seja você um iniciante ou um levantador experiente, nossos instrutores especializados o guiarão por treinos seguros e eficazes adaptados às suas necessidades individuais. Prepare-se para se desafiar e ver resultados reais!',
    image: image1,
  },
  {
    name: 'Aulas de Yoga',
    description:
      'Relaxe e rejuvenesça seu corpo e mente com nossas aulas de yoga. Conduzidas por instrutores experientes, nossas aulas oferecem uma combinação perfeita de relaxamento, flexibilidade e atenção plena. Se você está procurando melhorar seu equilíbrio, aliviar o estresse ou simplesmente encontrar paz interior, nossas sessões de yoga proporcionam um espaço acolhedor para praticantes de todos os níveis.',
    image: image2,
  },
  {
    name: 'Aulas de Abdominais',
    description:
      'Prepare-se para esculpir um core forte e definido com nossas aulas de abdominais. Lideradas por instrutores certificados, essas sessões concentram-se em fortalecer os músculos abdominais e melhorar a estabilidade do core. Com uma combinação de exercícios desafiadores e orientação especializada, você estará a caminho de alcançar seus objetivos de fitness e revelar aqueles abdominais tonificados!',
    image: image3,
  },
  {
    name: 'Aulas em Grupo',
    description:
      'Desafie-se e divirta-se com nossas aulas em grupo. De treinos ao ar livre a desafios de obstáculos, essas sessões dinâmicas irão expandir seus limites e energizar sua rotina de exercícios. Sob a orientação de instrutores experientes, você se aventurará em novos desafios enquanto aprimora sua resistência, força e agilidade enquanto se diverte com os amigos.',
    image: image4,
  },

  {
    name: 'Aulas de Fitness',
    description:
      'Eleve sua rotina de fitness com nossa ampla variedade de aulas de fitness. De treinamento intervalado de alta intensidade a aulas de dança, oferecemos algo para todos. Lideradas por instrutores motivadores, nossas aulas proporcionam um ambiente divertido e de apoio para ajudá-lo a alcançar seus objetivos fitness. Prepare-se para suar, sorrir e ver resultados reais!',
    image: image5,
  },
  {
    name: 'Cursos Profissionalizantes',
    description:
      'Prepare-se para uma carreira no mundo do fitness com nossos cursos profissionalizantes. Seja você interessado em treinamento de força, condicionamento físico ou performance atlética, nossos programas oferecem a orientação especializada e o apoio necessário para alcançar seus objetivos. Com uma combinação de teoria e prática, você estará pronto para se tornar um instrutor qualificado e transformar vidas.',
    image: image6,
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>NOSSAS AULAS</HText>
            <p className="py-5">
              Nossa academia oferece uma ampla variedade de cursos
              cuidadosamente projetados para atender às diversas necessidades e
              interesses dos nossos membros. Desde aulas de treinamento com
              pesos e yoga até aulas especializadas em abdominais e aventura,
              temos opções para todos os gostos e níveis de condicionamento
              físico.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses
