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
  ami                         = "ami-0c2b8ca1dad447f8a"
  instance_type               = "t2.micro"
  key_name                    = aws_key_pair.ssh_key.key_name
  associate_public_ip_address = true
  subnet_id                   = aws_subnet.public.id

  vpc_security_group_ids = [aws_security_group.allow_ssh.id, aws_security_group.allow_ping.id]

  tags = {
    Name = "FICHA-SERVER"
  }
}

resource "aws_instance" "db" {
  ami                    = "ami-0c2b8ca1dad447f8a"
  instance_type          = "t2.micro"
  key_name               = aws_key_pair.ssh_key.key_name
  subnet_id              = aws_subnet.private.id
  vpc_security_group_ids = [aws_security_group.allow_ssh.id, aws_security_group.allow_ping.id]

  tags = {
    Name = "FICHA-DATABASE"
  }
}
