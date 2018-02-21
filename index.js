import * as amqp from 'amqplib/callback_api';

amqp.connect('amqp://localhost:5672', (error, connection) => {
  if (error) {
    console.log(error);
    process.exit(1);
  } else {
    connection.createChannel((error, channel) => {
      if (error) {
        console.log(error);
        process.exit(1);
      } else {
        channel.assertQueue('proven_batcher', { durable: false });
        channel.consume('proven_batcher', (message) => {
          console.log(message.content.toString());
          connection.close();
          process.exit(0);
          }, { noAck: true });
      }
    });
  }
});