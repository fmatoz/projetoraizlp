export interface ProjectPhoto { src: string; alt: string; caption: string; width: number; height: number; }
export interface ProjectVideo { src: string; caption: string; poster: string; }
export interface Project { id: string; name: string; status: "Finalizado" | "Em andamento"; summary: string; stages: { title: string; description: string; photos: ProjectPhoto[]; videos?: ProjectVideo[]; }[]; }
export const projects: Project[] = [
  {
    "id": "casaria",
    "name": "Casaria Café",
    "summary": "Do balcão à fachada, a madeira dá continuidade aos ambientes e aos detalhes do espaço.",
    "stages": [
      {
        "title": "Montagem no local",
        "description": "O balcão ganha forma no ambiente, antes dos detalhes finais.",
        "photos": [
          {
            "src": "/images/projects/casaria-1-03.webp",
            "alt": "Equipe trabalhando na montagem da fachada — Casaria Café",
            "caption": "Equipe trabalhando na montagem da fachada",
            "width": 1200,
            "height": 1600
          },
          {
            "src": "/images/projects/casaria-1-06.webp",
            "alt": "Balcão durante a montagem no interior — Casaria Café",
            "caption": "Balcão durante a montagem no interior",
            "width": 1400,
            "height": 1050
          }
        ]
      },
      {
        "title": "Instalação",
        "description": "Ajustes e instalação dos elementos de madeira no espaço.",
        "photos": [
          {
            "src": "/images/projects/casaria-2-05.webp",
            "alt": "Fachada e deck durante a instalação — Casaria Café",
            "caption": "Fachada e deck durante a instalação",
            "width": 1400,
            "height": 1050
          },
          {
            "src": "/images/projects/casaria-2-11.webp",
            "alt": "Instalação dos bancos na lateral — Casaria Café",
            "caption": "Instalação dos bancos na lateral",
            "width": 1400,
            "height": 1050
          }
        ]
      },
      {
        "title": "Projeto finalizado",
        "description": "O resultado na fachada, no interior e nos espaços de convivência.",
        "photos": [
          {
            "src": "/images/projects/casaria-3-01.webp",
            "alt": "Fachada e deck finalizados — Casaria Café",
            "caption": "Fachada e deck finalizados",
            "width": 1200,
            "height": 1600
          },
          {
            "src": "/images/projects/casaria-3-02.webp",
            "alt": "Interior com balcão de madeira finalizado — Casaria Café",
            "caption": "Interior com balcão de madeira finalizado",
            "width": 1200,
            "height": 1600
          },
          {
            "src": "/images/projects/casaria-3-07.webp",
            "alt": "Banco suspenso e mesa instalados — Casaria Café",
            "caption": "Banco suspenso e mesa instalados",
            "width": 1200,
            "height": 1600
          },
          {
            "src": "/images/projects/casaria-3-00.webp",
            "alt": "Detalhes da madeira na fachada — Casaria Café",
            "caption": "Detalhes da madeira na fachada",
            "width": 1200,
            "height": 1600
          }
        ]
      }
    ],
    "status": "Finalizado"
  },
  {
    "id": "levena",
    "name": "Levena",
    "summary": "Da leitura do projeto à montagem dos móveis, acompanhe a transformação da madeira no espaço finalizado.",
    "stages": [
      {
        "title": "Fabricação e preparação",
        "description": "Desenhos, peças e estruturas em madeira durante a execução.",
        "photos": [
          {
            "src": "/images/projects/levena-1-21.webp",
            "alt": "Equipe conferindo o desenho do projeto — Levena",
            "caption": "Equipe conferindo o desenho do projeto",
            "width": 1200,
            "height": 1600
          },
          {
            "src": "/images/projects/levena-1-34.webp",
            "alt": "Peças e estrutura do banco durante a montagem — Levena",
            "caption": "Peças e estrutura do banco durante a montagem",
            "width": 1200,
            "height": 1600
          },
          {
            "src": "/images/projects/levena-1-25.webp",
            "alt": "Trabalho de montagem da estrutura de madeira — Levena",
            "caption": "Trabalho de montagem da estrutura de madeira",
            "width": 1200,
            "height": 1600
          }
        ]
      },
      {
        "title": "Instalação",
        "description": "Os móveis chegam ao ambiente e recebem os ajustes de montagem.",
        "photos": [
          {
            "src": "/images/projects/levena-2-00.webp",
            "alt": "Mobiliário em madeira durante a montagem no local — Levena",
            "caption": "Mobiliário em madeira durante a montagem no local",
            "width": 1200,
            "height": 1600
          },
          {
            "src": "/images/projects/levena-2-36.webp",
            "alt": "Equipe ajustando a instalação do banco — Levena",
            "caption": "Equipe ajustando a instalação do banco",
            "width": 1200,
            "height": 1600
          },
          {
            "src": "/images/projects/levena-2-07.webp",
            "alt": "Peças de madeira preparadas para montagem no ambiente — Levena",
            "caption": "Peças de madeira preparadas para montagem no ambiente",
            "width": 1200,
            "height": 1600
          }
        ]
      },
      {
        "title": "Projeto finalizado",
        "description": "Balcões, bancos e mesas integrados ao ambiente pronto.",
        "photos": [
          {
            "src": "/images/projects/levena-3-38.webp",
            "alt": "Balcão e estantes no ambiente finalizado — Levena",
            "caption": "Balcão e estantes no ambiente finalizado",
            "width": 1200,
            "height": 1600
          },
          {
            "src": "/images/projects/levena-3-28.webp",
            "alt": "Vista do interior com balcão e mobiliário — Levena",
            "caption": "Vista do interior com balcão e mobiliário",
            "width": 1200,
            "height": 1600
          },
          {
            "src": "/images/projects/levena-3-40.webp",
            "alt": "Banco estofado e mesa no espaço finalizado — Levena",
            "caption": "Banco estofado e mesa no espaço finalizado",
            "width": 1200,
            "height": 1600
          },
          {
            "src": "/images/projects/levena-3-44.webp",
            "alt": "Mobiliário no ambiente finalizado — Levena",
            "caption": "Mobiliário no ambiente finalizado",
            "width": 1200,
            "height": 1600
          }
        ]
      }
    ],
    "status": "Finalizado"
  },
  {
    "id": "plow",
    "name": "Pibus Hamburguer",
    "status": "Em andamento",
    "summary": "Retrofit em andamento: a renovação do mobiliário e dos revestimentos de madeira, do ambiente existente à instalação das novas peças.",
    "stages": [
      {
        "title": "Antes do retrofit",
        "description": "O ambiente e o mobiliário existentes, registrados antes da renovação.",
        "photos": [
          {
            "src": "/images/projects/plow-1-10.webp",
            "alt": "Vista do salão antes do retrofit — Pibus Hamburguer",
            "caption": "Vista do salão antes do retrofit",
            "width": 1200,
            "height": 1600
          },
          {
            "src": "/images/projects/plow-1-02.webp",
            "alt": "Banco existente antes da intervenção — Pibus Hamburguer",
            "caption": "Banco existente antes da intervenção",
            "width": 720,
            "height": 1600
          },
          {
            "src": "/images/projects/plow-1-07.webp",
            "alt": "Mesas e bancos antes da renovação — Pibus Hamburguer",
            "caption": "Mesas e bancos antes da renovação",
            "width": 1400,
            "height": 630
          }
        ]
      },
      {
        "title": "Preparação das peças",
        "description": "Estruturas, tampos e bancos preparados na marcenaria para a renovação do espaço.",
        "photos": [
          {
            "src": "/images/projects/plow-2-29.webp",
            "alt": "Peças e estruturas de madeira durante a preparação — Pibus Hamburguer",
            "caption": "Peças e estruturas de madeira durante a preparação",
            "width": 1200,
            "height": 1600
          },
          {
            "src": "/images/projects/plow-2-28.webp",
            "alt": "Estruturas de bancos em montagem na marcenaria — Pibus Hamburguer",
            "caption": "Estruturas de bancos em montagem na marcenaria",
            "width": 1200,
            "height": 1600
          },
          {
            "src": "/images/projects/plow-2-27.webp",
            "alt": "Banco com assento durante a preparação — Pibus Hamburguer",
            "caption": "Banco com assento durante a preparação",
            "width": 1200,
            "height": 1600
          },
          {
            "src": "/images/projects/plow-2-31.webp",
            "alt": "Tampo de madeira com acabamento em preparação — Pibus Hamburguer",
            "caption": "Tampo de madeira com acabamento em preparação",
            "width": 899,
            "height": 1599
          }
        ],
        "videos": [
          {
            "src": "/videos/projects/plow-preparacao.mp4",
            "caption": "Preparação de um banco na marcenaria",
            "poster": "/images/projects/plow-2-27.webp"
          }
        ]
      },
      {
        "title": "Instalação no local",
        "description": "Montagem dos bancos e instalação dos revestimentos de madeira no ambiente existente.",
        "photos": [
          {
            "src": "/images/projects/plow-3-15.webp",
            "alt": "Instalação do revestimento de madeira na parede — Pibus Hamburguer",
            "caption": "Instalação do revestimento de madeira na parede",
            "width": 1200,
            "height": 1600
          },
          {
            "src": "/images/projects/plow-3-13.webp",
            "alt": "Revestimento e peças durante a montagem no salão — Pibus Hamburguer",
            "caption": "Revestimento e peças durante a montagem no salão",
            "width": 1200,
            "height": 1600
          },
          {
            "src": "/images/projects/plow-3-18.webp",
            "alt": "Estrutura do banco durante a instalação — Pibus Hamburguer",
            "caption": "Estrutura do banco durante a instalação",
            "width": 1200,
            "height": 1600
          },
          {
            "src": "/images/projects/plow-3-21.webp",
            "alt": "Fixação do acabamento junto à janela — Pibus Hamburguer",
            "caption": "Fixação do acabamento junto à janela",
            "width": 1200,
            "height": 1600
          }
        ],
        "videos": [
          {
            "src": "/videos/projects/plow-instalacao.mp4",
            "caption": "Registro do ambiente durante a intervenção",
            "poster": "/images/projects/plow-4-20.webp"
          }
        ]
      },
      {
        "title": "Evolução do retrofit",
        "description": "Os novos elementos já começam a transformar o ambiente. O projeto segue em andamento.",
        "photos": [
          {
            "src": "/images/projects/plow-4-20.webp",
            "alt": "Novos tampos e bancos no ambiente durante o retrofit — Pibus Hamburguer",
            "caption": "Novos tampos e bancos no ambiente durante o retrofit",
            "width": 1200,
            "height": 1600
          },
          {
            "src": "/images/projects/plow-4-23.webp",
            "alt": "Fachada da Pibus Hamburguer durante os trabalhos — Pibus Hamburguer",
            "caption": "Fachada da Pibus Hamburguer durante os trabalhos",
            "width": 1200,
            "height": 1600
          }
        ]
      }
    ]
  }
];
