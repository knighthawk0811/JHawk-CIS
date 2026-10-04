---
title: "01.2 - Software"
weight: 40
book_number: 4
prev: "/programming-logic/ch01/01.1/"
---

## Computer Hardware

Computer hardware refers to all the physical components and devices that
make up or connect to a computer system. Below is a breakdown of the key
hardware elements:

## CPU - Central processing Unit

<div class="row g-3">
  <div class="col-md-6">
    {{< figure src="./media/image11.jpg" width="500" alt="CPU block diagram" >}}
  </div>
  <div class="col-md-6">
    {{< figure src="./media/image7.jpg" width="500" alt="CPU chip image" >}}
  </div>
</div>

The CPU, often referred to as the \"brain\" of the computer, is
responsible for executing the instructions of programs. When software
runs, the CPU performs tasks by processing commands, making it one of
the most critical components in the computer system. It performs basic
operations like arithmetic, logic, control, and input/output processing.

## **GPU - Graphics Processing Unit**

The **Graphics Processing Unit (GPU)** is a specialized processor
designed to handle the complex mathematical calculations required for
rendering images, video, and animations. While the **CPU** is
responsible for general-purpose tasks, the **GPU** excels at parallel
processing, making it ideal for graphics-intensive applications like
video games, video editing, and 3D
rendering.
{{< figure src="./media/image1.png" width="600" alt="GPU illustration" >}}
Modern GPUs also play a crucial role in
**machine learning** and **artificial intelligence (AI)** tasks, as they
can process large amounts of data simultaneously. GPUs are typically
found as dedicated hardware components in the form of **graphics cards**
but may also be integrated into the **motherboard** or **CPU** (as
**integrated graphics**), which are sufficient for basic tasks.

- **Dedicated (Discrete) GPU**: A separate graphics card that provides
  powerful rendering capabilities for demanding applications. Brands
  like **NVIDIA** and **AMD** produce popular discrete GPUs.

- **Integrated GPU**: Built into the CPU, it shares resources with the CPU
and is suitable for less demanding tasks such as web browsing or office
work.
{{< figure src="./media/image6.png" width="760" alt="Integrated and dedicated GPU comparison" >}}
Whether integrated or dedicated, the GPU
significantly enhances a computer\'s ability to handle visual content
and certain computational tasks.

## Memory
{{< figure src="./media/image8.png" width="520" alt="Memory illustration" >}}
RAM (Random Access Memory) is where active
data and programs are stored so the CPU can quickly access them. Unlike
storage, which keeps data long-term, RAM is \"volatile,\" meaning that
all data is lost when the computer is powered off. It's called \"random
access\" because any piece of data can be retrieved without having to go
through other data first (as was the case with older, tape-based
memory). RAM is much faster than long-term storage but cannot retain
information without power.

## Storage
{{< figure src="./media/image9.png" width="460" alt="Storage illustration" >}}
Because RAM is volatile, computers require
long-term storage to hold data even when powered off. Storage devices
include traditional Hard Disk Drives (HDDs) or modern Solid State Drives
(SSDs). While SSDs are faster and more reliable than HDDs, both types of
storage are slower than RAM. Storage is also much cheaper, allowing
computers to store large amounts of data. For instance, 1 terabyte (TB)
of storage costs about the same as 8-16 gigabytes (GB) of RAM, depending
on brands and specifications.

- Disk (HDD): Refers to traditional hard drives with spinning metal
platters.

- Disc: Refers to optical storage, such as CDs (compact discs) or DVDs.

## Motherboard
{{< figure src="./media/image5.png" width="620" alt="Motherboard illustration" >}}
The motherboard is the central circuit
board that connects all components of the computer. It holds the CPU,
memory, and storage, and provides slots for other hardware like the GPU
(graphics card) and networking devices. The motherboard also includes
the BIOS (Basic Input/Output System), a low-level program that helps
initialize hardware and start the operating system. The BIOS ensures
that all components are working before handing control to the operating
system during boot-up.

## PSU (Power Supply Unit)
{{< figure src="./media/image4.png" width="440" alt="Power supply unit illustration" >}}
The PSU converts electricity from the wall
outlet into the proper voltages and current needed by the computer\'s
components. It powers the motherboard, GPU, hard drives, cooling
systems, and other peripherals. Each device in the computer typically
requires a specific voltage, and the PSU ensures they receive the
correct amount.

## Cooling Devices
{{< figure src="./media/image2.png" width="420" alt="Cooling devices illustration" >}}
Computer components, especially CPUs and
GPUs, generate heat during operation. Without proper cooling, they can
overheat and fail. Cooling systems use a combination of heatsinks and
fans to draw heat away from these components.

- Heatsinks are metallic surfaces designed to absorb heat and transfer it
away from the CPU or GPU.

- Fans blow cool air across the heatsinks to further disperse the heat
outside the computer chassis.

{{< figure src="./media/image3.png" width="500" alt="Liquid cooling illustration" >}}
Some computers also use liquid cooling
systems, where a liquid is circulated through tubes to absorb heat from
components. These systems may include a reservoir, pump, and radiator,
with fans to cool the liquid. In extreme cases, computers can be
submerged in a special, non-conductive liquid to cool components.

## Input Devices

- Input devices allow users to provide data to the computer. The most
common input devices include:

- Keyboard: For typing text and commands.

- Mouse: For pointer control and interaction with graphical elements.

- Others: Game controllers, scanners, touchscreens, microphones, etc.

## Output devices

Output devices display or produce the results of a computer\'s
processing. Common output devices include:

- Monitor: The primary device for displaying visual output.

- Speakers: For audio output.

- Printers: For producing physical copies of documents.

- External drives/USBs: For transferring data to portable storage.

## Internet Devices
{{< figure src="./media/image10.png" width="320" alt="Internet devices illustration" >}}
Most computers include networking
components for internet access. These can be:

Wired (Ethernet): Usually built into the motherboard, allowing a
physical connection to a network.

Wireless (Wi-Fi): Provided either via a separate chip or built directly
into the motherboard, allowing wireless access to the internet.

Both wired and wireless devices function as input and output devices
since they send and receive data to and from external networks.

