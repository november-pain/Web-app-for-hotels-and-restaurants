resource "aws_key_pair" "ssh" {
  key_name   = "ficha"
  public_key = file("~/.ssh/id_rsa.pub")
}
