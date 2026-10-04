---
title: "01.3 - Software Development Life Cycle"
weight: 50
book_number: 5
prev: "/programming-logic/ch01/01.2/"
next: "/programming-logic/ch01/01.4/"
---

# 7 Stages of the Software Development Life Cycle (SDLC)

The Software Development Life Cycle (SDLC) is a structured process that
defines the stages involved in developing a software product. Each stage
has specific activities, and while the timeline can vary from project to
project, the SDLC generally follows the seven stages outlined below:

## Stage 1: Planning and Requirements Gathering

The first step in the SDLC is planning. This involves assembling the
team to brainstorm, set objectives, and identify potential risks. During
this stage, the team defines the project scope, business goals, and
high-level requirements. Key deliverables include the project charter
and an initial risk assessment, ensuring a clear understanding of the
project's purpose and boundaries.

## Stage 2: Requirements Analysis

In this phase, the gathered ideas are refined into detailed, actionable
requirements. The focus is on understanding what the system must
accomplish and what constraints it must work within. The team
collaborates with stakeholders to create a detailed requirements
specification document, which outlines functional and non-functional
requirements. This stage is crucial for ensuring that the final product
aligns with user and business needs.

## Stage 3: System Design

During the design phase, the team translates requirements into a
technical blueprint. This includes creating wireframes, mockups, and
technical architecture. System components, interfaces, and data flows
are mapped out, ensuring a clear guide for development. Tools like Adobe
XD or InVision are often used for creating mockups, while technical
documentation is prepared to guide the developers during the coding
phase.

## Stage 4: Development

The development phase is where the actual coding of the software takes
place. This is typically the most time-intensive phase, requiring
developers to build the application's functionality as per the design
specifications. Front-end, back-end, and database development are
carried out, and version control systems (such as Git) help manage the
source code. Collaboration and communication between team members are
key to maintaining code quality and meeting deadlines.

## Stage 5: Testing

Once development is complete, the product undergoes rigorous testing to
ensure that it functions as expected and meets the specified
requirements. Testing involves identifying and fixing bugs, as well as
ensuring the system integrates smoothly with other software or services.
Common types of testing include unit testing, integration testing,
system testing, and user acceptance testing (UAT). This phase is crucial
for ensuring the software is reliable and ready for deployment.

## Stage 6: Deployment and Implementation

After successful testing, the software is deployed into a live
environment. This can involve moving the software to production servers
and making it accessible to users. If the software is customer-facing,
this stage may include marketing efforts to promote the launch. For
internal systems, it involves training users and transitioning from old
systems to the new one. Careful planning ensures a smooth rollout with
minimal disruption to users.

## Stage 7: Maintenance and Operations

The final stage of the SDLC is ongoing maintenance and operations. After
the software is live, the team monitors its performance, addresses user
feedback, and fixes any issues that arise. Maintenance involves patching
bugs, updating features, and ensuring the system continues to meet
business needs. Operations cover day-to-day tasks such as performing
backups, monitoring system health, and ensuring the software remains
secure and reliable.

## Finally

This structured approach ensures a methodical process that reduces
risks, improves efficiency, and ensures high-quality software delivery.
Each stage serves a critical role in transforming an idea into a
functional, reliable software product

# Software Development Models

There are several established software development models, each offering
its own advantages and trade-offs. The choice of model depends on
factors such as project complexity, timeline, and evolving requirements.
Below are six commonly used models:

further info

[[https://www.scnsoft.com/software-development/software-development-models]{.underline}](https://www.scnsoft.com/software-development/software-development-models)

[[https://www.geeksforgeeks.org/software-engineering/top-8-software-development-models-used-in-industry/]{.underline}](https://www.geeksforgeeks.org/software-engineering/top-8-software-development-models-used-in-industry/)

## Waterfall Model

The Waterfall model is a sequential and linear design process that
progresses through distinct phases: requirements, design,
implementation, testing, and maintenance. It has been widely used since
the 1970s and is best suited for projects where requirements are
well-defined upfront. The Waterfall model is linear and rigid, meaning
each phase must be completed before moving to the next. This model is
less flexible if changes arise during development, making it ideal for
projects with stable, unchanging requirements. However, it can be
problematic in environments where requirements evolve frequently.

{{< figure src="./media/image1.png" width="640" alt="Waterfall model diagram" >}}

## Agile Model

The Agile model emphasizes flexibility and rapid iteration. It
prioritizes delivering functional software early and continuously
improving it through short development cycles known as \"sprints.\"
Agile focuses on collaboration with stakeholders and adaptability to
changing requirements, often favoring working software over
comprehensive documentation. This approach is ideal for projects where
requirements are expected to change or evolve. Agile excels in
small-to-medium projects but can struggle with complex, large-scale
projects due to its lighter focus on upfront planning and documentation.

{{< figure src="./media/image7.png" width="640" alt="Scrum workflow diagram" >}}

## Iterative Model

The Iterative model breaks down development into small, manageable
cycles, allowing for the continuous refinement of the software. Each
iteration includes planning, design, coding, testing, and evaluation,
enabling teams to incorporate feedback and learn from previous mistakes.
This approach reduces risks by detecting issues early and making
incremental improvements. The Iterative model is well-suited for large,
complex projects that require regular updates and user feedback
throughout the development process.

{{< figure src="./media/image6.png" width="560" alt="Iterative model diagram" >}}

## Incremental Model

Like the iterative model except instead of building the entire project
from small to bigger and better, it focuses on building each piece of
the project as separate modules (like legos) and then combining the
pieces later. This model allows for multiple teams to work independently
on modules that fit their expertise. It is also quite flexible if
requirements change during development.

{{< figure src="./media/image5.png" width="700" alt="Incremental model diagram" >}}

## V-Shaped Model (Verification and Validation Model)

The V-Shaped model, like the Waterfall model, follows a linear process,
but with a greater focus on testing at each development stage. Each
phase of development (verification) has a corresponding testing phase
(validation) to ensure quality. This makes the V-Shaped model highly
structured and ideal for projects that demand rigorous quality control,
documentation and a systematic testing approach. However, its rigidity
makes it less adaptable to changes, which limits its use in projects
with evolving requirements.

{{< figure src="./media/image3.png" width="560" alt="V-model diagram" >}}

## Big Bang Model

The Big Bang model is a minimal-structure approach where development
starts with little more than a basic idea or set of requirements.
Developers work on coding with minimal planning, focusing on rapid
development. This model is best for small, experimental projects where
requirements may not be clear or where quick results are needed.
However, due to its lack of structure, the Big Bang model can become
costly and inefficient for larger, complex projects, making it risky
when requirements are uncertain.

{{< figure src="./media/image4.jpg" width="820" alt="Big Bang model illustration" >}}

## Spiral Model

The Spiral model combines the iterative nature of the Iterative model
with the structured aspects of the Waterfall model. It focuses on risk
management by breaking the project into smaller cycles (or spirals),
with each cycle addressing potential risks before moving to the next
phase. Each iteration involves planning, risk analysis, development, and
evaluation. The Spiral model is particularly effective for large,
complex projects that require constant assessment and adjustment. Its
emphasis on risk management makes it ideal for projects with high
uncertainty or significant technical and business risks.

{{< figure src="./media/image2.png" width="680" alt="Spiral model diagram" >}}

## Finally

Each of these models has its strengths and weaknesses. Selecting the
right model depends on the specific needs of the project, such as its
complexity, the stability of requirements, and the level of risk
involved. Understanding these factors will help teams choose the most
appropriate model for a successful software development process.

# Concepts to determine which module fits your project

- Process flow

  - Sequential - activities flow in order

  - parallel - Multiple activities occur at the same time

  - Iterative - cyclical processes

  - Incremental - modular development

- Flexibility

  - Linear - activities must wait for previous step

  - Adaptive - can adjust to change mid development

- Documentation

  - Lightweight - less documentation needed

  - Doc heavy - formal documentation required

- Risk management

  - Risk Driven - address risk during development

  - Front loaded - address risk before development

- Customer Involvement

  - Customer Centric- allow customers to see and modify during
    development

  - Delivery Focused - frequent delivery of updates to customer

- Team Structure

  - Cross functional - Each team is diverse

  - Specialized - each team focuses on their expertise

  - Collaborative - Emphasis communication between teams

  - Self organizing - Teams have autonomy to determine their own steps
    toward the goal
