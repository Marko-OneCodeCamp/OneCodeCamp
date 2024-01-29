class EmailBuilder {
    constructor() {
        this.email = {
            recipient: '',
            subject: '',
            body: '',
            attachments: []
        };
    }

    setRecipient(recipient) {
        this.email.recipient = recipient;
        return this; 
    }
    setSubject(subject) {
        this.email.subject = subject;
        return this; 
    }
    setBody(body) {
        this.email.body = body;
        return this; 
    }

    addAttachment(attachment) {
        this.email.attachments.push(attachment);
        return this; 
    }

    send() {
        console.log('Sending email:');
        console.log('Recipient:', this.email.recipient);
        console.log('Subject:', this.email.subject);
        console.log('Body:', this.email.body);
        console.log('Attachments:', this.email.attachments);
    }
}


const emailBuilder = new EmailBuilder();

emailBuilder
    .setRecipient('Marko@gmail.com')
    .setSubject('Meeting Tomorrow')
    .setBody('Hi Marko, see you there!')
    .addAttachment('Agenda.pdf')
    .send();
