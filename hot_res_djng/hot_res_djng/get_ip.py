import socket


def get_ip_address():
    with open('ip.txt', "w") as file:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        file.write(ip)
        return ip