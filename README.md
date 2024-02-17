# RPG Game Architecture

Neste projeto, aplicaremos os princípios da arquitetura SOLID e os princípios de Programação Orientada a Objetos (POO) em uma estrutura de jogos de interpretação de papéis, conhecidos como jogos RPG (Role Playing Game).

## Princípios Aplicados

Os princípios SOLID e de POO são fundamentais para garantir uma arquitetura robusta e flexível. Aqui estão os princípios que serão aplicados no projeto:

1. **S - Single Responsibility Principle (Princípio da Responsabilidade Única):** Cada classe deve ter uma única razão para mudar, ou seja, deve ter apenas uma responsabilidade.

2. **O - Open/Closed Principle (Princípio Aberto/Fechado):** As entidades de software (classes, módulos, funções, etc.) devem ser abertas para extensão, mas fechadas para modificação.

3. **L - Liskov Substitution Principle (Princípio da Substituição de Liskov):** Se uma classe S é um subtipo de uma classe T, então objetos do tipo T podem ser substituídos por objetos do tipo S sem alterar a corretude do programa.

4. **I - Interface Segregation Principle (Princípio da Segregação de Interfaces):** Uma classe não deve ser forçada a implementar interfaces que ela não utiliza.

5. **D - Dependency Inversion Principle (Princípio da Inversão de Dependência):** Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. Além disso, abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

## Estrutura do Projeto

A estrutura do projeto seguirá a organização abaixo:
```
./src
|-- entities
|-- interfaces
|-- services
|-- utils
|-- tests
```
- **entities:** Contém as classes que representam as entidades do jogo.
- **interfaces:** Define as interfaces utilizadas pelas classes.
- **services:** Agrupa a lógica de negócios e serviços do jogo.
- **utils:** Funções utilitárias.
- **tests:** Contém os testes da aplicação.

⚠️ **Importante:** O script utiliza o binário `find` do Linux.
