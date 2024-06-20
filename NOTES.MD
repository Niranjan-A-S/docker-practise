- Docker is a container technology: A tool for creating and managing containers.
- A container is a standardized unit of software (A package of code and dependencies to run that code Eg: Nodejs code + the Nodejs Runtime)
- The same container yields the exact same application and execution behavior! No matter where or by whom it might be executed.

 - Unlike the VMs which is spinned up on the machines, docker communicates with  OS built support (Emulated Container Support) and on top of that it has docker engine which has the capacity of spin up multiple containers. These containers contain our code, runtime, tools, dependencies along with a small OS layer but they doesn't contain the whole bloated OS which has  unnecessary tools.