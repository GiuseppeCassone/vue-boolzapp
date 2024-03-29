// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato
// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
// Milestone 5 - opzionale
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
// Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti


const { createApp } = Vue;
        
createApp({
    data() {
        return {
            

            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    activity: '',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    activity: '',
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    activity: '',
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    activity: '',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    activity: '',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    activity: '',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    activity: '',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    activity: '',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],            
            
            activeContactIndex: {},
            newMessage: ``,
            searchBarText: ``,
            newContact: { name: '', avatar: './img/default-avatar.jpg'},
            isTyping: false,
            predefinedMessage: true,
            visibleSplash: true,

            randomResponseArray: ["Onii-chan!", "Yamete kudasai", "Nani?", "Gomen nasai", "Sayonara! Mata ashita ne.", "Watashi wa Kira da", "Itsuka Hokage ni naru", "Yokatta"],
            
        }
    },
    mounted() {
        // this.activeContactIndex = this.contacts[0];
        setTimeout(() => {
            this.visibleSplash = false;
        }, 3000);
    },

    methods: {
        // Funzione che permette di visualizzare le conversazioni corrette
        showConversation(index) {
            const principalIndex = this.contacts.indexOf(this.filterChatName[index]);

            this.activeContactIndex = this.contacts[principalIndex];
            this.predefinedMessage = false;
        },


        // Funzione che permette di inviare un messaggio e ricevere una risposta
        sendMessage(){

            const actualUser = this.activeContactIndex;

            if(this.newMessage.length != 0 && this.newMessage.trim()) {

                actualUser.activity = 'sta scrivendo...';

                const newMessage = {
                    date: new Date().toLocaleString(),
                    message: this.newMessage,
                    status: `sent`
                };
                actualUser.messages.push(newMessage);
                this.newMessage = ``;
                this.isTyping = false;
                this.scrollToBottom();
    
                setTimeout(() => {
                    const randomIndexResponse = Math.floor(Math.random() * this.randomResponseArray.length);
                    const response = {
                        date: new Date().toLocaleString(),
                        message: this.randomResponseArray[randomIndexResponse],
                        status: `received`
                    };
                    actualUser.messages.push(response);
                    actualUser.activity = 'online';
                    this.scrollToBottom();

                    // Funzione che permette di visualizzare l'ultimo accesso dell'utente in chat
                    setTimeout(() => {
                        const now = new Date();
                        const hours = now.getHours().toString().padStart(2, '0');
                        const minutes = now.getMinutes().toString().padStart(2, '0');
                        actualUser.activity = `ultimo accesso alle ${hours}:${minutes}`;
                    }, 5000);
                    
            },Math.random() * 3000 + 1000);

            }
           
        },

        // Funzione che permette di aggiungere una nuova chat
        addNewChat() {
            if(this.newContact.name.trim()) {
                this.contacts.push({
                    name: this.newContact.name,
                    avatar: this.newContact.avatar,
                    visible: true,
                    activity: '',
                    messages: []
                });
                this.newContact.name = '';
                this.newContact.avatar = '';
            }
        },
        
        // Funzione che permette di scrollare immediatamente al fondo della chat
        scrollToBottom() {
            const targetRef = this.$refs.myScrollTarget;
            this.$nextTick(() => {
              targetRef.scrollTo(
                {
                  top: targetRef.scrollHeight,
                  left: 0,
                  behavior: "smooth"
                }
              );
            });
          },

        // Funzione che permette di eliminare i messaggi
        deleteMessage(contact, messageIndex) {
            contact.messages.splice(messageIndex, 1)
        },

        // Funzione che permette di eliminare tutti i messaggi di una chat
        deleteAllMessages(contact) {
            contact.messages.splice(0, contact.messages.length);
        },

        // Funzione che permette di eliminare la chat intera
        deleteChat(contact) {
            const index = this.contacts.indexOf(contact);
            if (index > -1) {
                this.contacts.splice(index, 1);
                this.activeContactIndex = {}; // Deseleziona il contatto attivo
            }
        },

        // Funzione che permette di convertire l'orario dei messaggi in ore e minuti soltanto
        getMessageTime(message) {
            const messageDate = message.date.split(" ")[1]
            return messageDate.split(":").slice(0, 2).join(":");
            
        },

        // Funzione per la dark-mode
        darkModeOption(){
        document.documentElement.classList.toggle('dark-mode');
        },

    },

    computed: {

        // Funzione che permette di filtrare le chat in base alle parole digitate nella search bar
        filterChatName(){
            return this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.searchBarText.toLowerCase());
            });
        },

        // Funzione per cambiare l'icona in base al fatto che l'utente digiti nella barra dei nuovi messaggi
        sendMessageOptions() {
            return this.isTyping ? `fa-solid fa-paper-plane` : `fa-solid fa-microphone`;
        }
    }
}).mount("#app");