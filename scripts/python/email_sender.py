import smtplib as smtp
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.header import Header
import base64
import sys


def send_message(message_text, message_target, message_subject):
    bytes_message = message_text.encode('utf-8')
    encoded_bytes = base64.b64decode(bytes_message)
    message_text = encoded_bytes.decode('utf-8')
    print("started sending in python")
    my_mail = 'mafiaonlinegamemail@gmail.com'
    password = 'mafiaqwerty'
   # message = 'From: {}\nTo: {}\nSubject: {}\n\n{}'.format(my_mail, message_target, message_subject, message_text)
    msg = MIMEMultipart('alternative')
    msg['From'] = my_mail
    msg['To'] = message_target
    msg['Subject'] = message_subject
    body = message_text
    msg.attach(MIMEText(body, 'html'))
    server = smtp.SMTP_SSL('smtp.gmail.com', 465)
    server.connect('smtp.gmail.com', 465)
   # server.set_debuglevel(1)
   # server.ehlo(my_mail)
    #server.ehlo()
    #server.starttls()
    server.ehlo()
    server.login(my_mail, password)
    #server.auth_plain()
   # print(my_mail)
    #print(message_target)
    #print(message)
    text = msg.as_string()

    server.sendmail(my_mail, message_target, text)
    server.quit()



if(len(sys.argv) < 4):
    print("Error! Too few arguments")
else:
    send_message(sys.argv[1], sys.argv[2], sys.argv[3])