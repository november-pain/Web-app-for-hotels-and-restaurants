resource "aws_key_pair" "ssh_key" {
  key_name   = "ficha-key"
  public_key = file("~/.ssh/id_rsa.pub")
}

resource "aws_network_interface" "server" {
  subnet_id = aws_subnet.public.id

  tags = {
    Name = "ficha-server-network-interface"
  }
}

resource "aws_instance" "server" {
  ami           = "ami-0c2b8ca1dad447f8a"
  instance_type = "t2.micro"
  key_name      = aws_key_pair.ssh_key.key_name
  network_interface {
    network_interface_id = aws_network_interface.server.id
    device_index         = 0
  }

  tags = {
    Name = "FICHA-SERVER"
  }
}
resource "aws_network_interface" "db" {
  subnet_id = aws_subnet.private.id

  tags = {
    Name = "ficha-db-network-interface"
  }
}

resource "aws_instance" "db" {
  ami           = "ami-0c2b8ca1dad447f8a"
  instance_type = "t2.micro"
  key_name      = aws_key_pair.ssh_key.key_name
  network_interface {
    network_interface_id = aws_network_interface.db.id
    device_index         = 0
  }

  tags = {
    Name = "FICHA-DATABASE"
  }
}
