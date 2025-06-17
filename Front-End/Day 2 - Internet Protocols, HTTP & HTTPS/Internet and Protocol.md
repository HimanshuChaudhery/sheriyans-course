# Internet, Protocols, HTTP/HTTPS & Developer Setup

## 1. Internet Protocols
The set of rules that need to be followed to surf on an internet and different devices a can communicate with each other.
**Ques: Why we needed it in first place Internet Protocols ?**
**Ans:** Every different company would like to have there own version of internet, but that could have been problematic, and that's why the communities like Internet Engineering Task Force (IETF) decided not to have this type of internet but a common and universal standard which need to follow.

![[Pasted image 20250617113527.png]]

**Ques: Where TCP(Transfer Control Protocol) is followed ?**
**Ans:** In TCP, message send by the user gets an acknowledgement by the receiver. Until this process, no any other transfer of message is possible. 
TCP is followed where real time communication is not needed. Like message sending, email sending.
TCP does not followed in those areas where Realtime Communication is needed like Live streams, Multiplayer games.
-  **Transmission Control Protocol(TCP)** ensures reliable, ordered, error-free communication.
-  Used in Web Browsing, File transfers, emails, messaging Apps.
- TCP **retransmits lost packets** to ensure data integrity.  
- TCP is slower than UDP. 

## 2. How Communication is established using TCP(3-way Handshake)?

**Ans:** This technique consists :- 
1. **SYN:** Client sends a request to start communication.
2. **SYN-ACK:** Server acknowledges and responds.
3. **ACK:** Client confirms, and data transfer begins.
![[Pasted image 20250617115224.png]]
![[TCP-gif.gif]]

### **Note:** Type protocol that need to be followed is decided by both Browser and Server.

## 3. What is UDP and Why it's used in Fast Communication ?
**Ans:** 
- UDP, or User Datagram Protocol, is ==a communication protocol that facilitates data transmission over a network, particularly for real-time applications==. 
- It's a connectionless protocol, meaning it doesn't establish a dedicated connection before sending data, making it faster but less reliable than its counterpart, TCP.
- Used in Video calls, Gaming, live streaming, where speed is more important than reliability.

![[UDP-gif.gif]]

### **Note :** Many think UDP is always unreliable, but modern application use **FEC(Forward Error Correction)** to improve reliability.

## 4. How UDP establishes connection ?
**Ans:**  
- **No handshake**, packets are sent **without waiting for confirmation**.
- If data is **lost or out of order, it won't be retransmitted**.
- Used in **VoIP calls, DNS lookups, gaming packets**.

<hr>

# Understanding HTTP & HTTPS

## 1. HTTP and its different versions 
- HTTP or Hyper Text Transfer Protocol is a foundational protocol for communication on the World Wide Web. 
- It enables the transfer of data, such as HTML pages, images, and videos, between web clients (like browsers) and servers. 
- HTTP operates on a request-response model, where clients send requests to servers, and servers respond with the requested information.
![[HTTP-.gif]]

## HTTP Versions:
- **HTTP/1.1:** Persistent connections, pipelining.
- **HTTP/2:** Multiplexing, header compression.
- **HTTP/3:** Uses **QUIC (faster & UDP-based).**

## 2. HTTP Status codes for Responses.


## 3. What is HTTPS and Why it's better than HTTP ?
HTTPS stands for HyperText Transfer Protocol Secure. It is the most common protocol for sending data between a web browser and a website. HTTPS is the secure variant of HTTP and is used to communicate between the user's browser and the website, ensuring that data transfer is encrypted for added security.
- **HTTPS = HTTP + SSL/TLS encryption.**
- Ensures **data privacy and prevents attacks** (MITM, sniffing).

![[HTTPS-gif.gif]]

### Common Myth:
- **"HTTPS makes a site 100% secure"**.
- Nope! It only encrypts the connection, but vulnerabilities in code can still exist.

## 4. How HTTPS provides a Secure Connection ?
- Uses **SSL/TLS encryption**.
- Encrypts **data at transit**, but not at rest.
### Lesser-known Fact:
- **SSL is outdated!** Modern websites use **TLS 1.3** for better security.

## 5. What are Proxy and Reverse Proxy ?
**Ans:** 
- **Proxy:** server that sits in front of one or more client computers and serves as a conduit between the clients and the internet.
- **Reverse Proxy:** Sits in front of the server to handle requests and **load balancing.**
### Lesser-known fact:
- **CDN's (like Cloudflare)** use reverse proxies to **prevent DDoS attacks.**

## 6. How VPN works and Helps Access Restricted Content ?