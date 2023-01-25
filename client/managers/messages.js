import { Template } from 'meteor/templating';

Template.messages.helpers({
  messages: () => {
    // возможно для оптимизации я бы прост хранил имена пользователей в сообщении,
    // что бы избежать вычеслений ниже, но по ТЗ надо инфу о пользователе грузить
    // так же в этом месте важно что бы наружу не торчали лишние данные из Users или Messages
    const messages = Messages.find().fetch();

    return messages.map(({ content, userId }) => {
      const { userName } = Users.findOne({ _id: userId });

      return {
        userName,
        content,
      };
    });
  },
});
