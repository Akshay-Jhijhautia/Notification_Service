const { TicketRepository } = require("../repositories");
const { MAILER } = require("../config");

const ticketRepository = new TicketRepository();

async function sendMail(mailFrom, mailto, subject, text) {
  try {
    const response = await MAILER.sendMail({
      from: mailFrom,
      to: mailto,
      subject: subject,
      text: text,
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function createTicket(data) {
  try {
    const response = await ticketRepository.createTicket(data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getPendingEmails(data) {
  try {
    const response = await ticketRepository.getPendingTickets();
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  sendMail,
  createTicket,
  getPendingEmails,
};
