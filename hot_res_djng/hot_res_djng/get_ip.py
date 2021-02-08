import socket


def get_ip_address(writeToFile=True):
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.connect(("8.8.8.8", 80))
    ip = s.getsockname()[0]
    if writeToFile:
        with open('ip.txt', "w") as file:
            file.write(ip)
    return ip