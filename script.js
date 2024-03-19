const projectsListElement = document.querySelector("#projects-list")

const projects = [
    {
        name: "Migração de Sistema Legado para SQL Server",
        description: "migração de um sistema legado para uma arquitetura moderna baseada em SQL Server. Este sistema, anteriormente construído em uma plataforma obsoleta, enfrentava desafios de desempenho e escalabilidade, além de limitações na manipulação e análise de dados. A migração para o SQL Server visava não apenas resolver esses problemas, mas também proporcionar uma base sólida para futuras expansões e inovações tecnológicas. ",
        //href: "http://link"
    },
    {
        name: "Implementação de Políticas de Segurança e Backup",
        description: " implementação de políticas de segurança e backup em um ambiente de SQL Server de grande escala. Com o crescimento da empresa e a expansão da infraestrutura de TI, tornou-se crucial garantir a segurança dos dados e a disponibilidade contínua do sistema, mesmo em caso de falhas ou desastres.",
        // href: "http://link"  
    },
]

projects.forEach(project => {
    projectsListElement.innerHTML += `
    <div>
        <div>
        <h3>${project.name}</h3>
        ${project.href ? `<a href="${project.href}" target="_blank"><i class="bi bi-box-arrow-up-right"></i></a>` : ""}
        </div>

        <p>
        ${project.description}
        </p>
  </div>`
})