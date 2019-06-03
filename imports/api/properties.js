import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export default Properties = new Mongo.Collection('properties');

// if (Meteor.isServer) {
//   // This code only runs on the server
//   Meteor.publish('tasks', function tasksPublication() {
//     return Tasks.find({
//       $or: [
//         { private: { $ne: true } },
//         { owner: this.userId },
//       ],
//     });
//   });
// }

Meteor.methods({
  'property.insert'(data){
    check(data, Object);

    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Properties.insert({
      name: data.name,
      address: data.address,
      description: data.description,
      image: data.image,
      createdAt: new Date(),
      owner: this.userId,
    })

  }
});
