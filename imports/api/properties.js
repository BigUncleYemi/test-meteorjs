import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export default Properties = new Mongo.Collection('properties');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('properties', function tasksPublication() {
    return Properties.find({
      $or: [
        { owner: this.userId },
      ],
    });
  });
}

Meteor.methods({
  'property.insert'(data){
    check(data, Object);

    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Properties.insert({
      name: data.Name,
      address: data.Address,
      description: data.Description,
      image: data.image,
      createdAt: new Date(),
      owner: this.userId,
    })
  },
  'property.update'(data){
    check(data, Object);

    const property = Properties.findOne(data._id);
    if ( property.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    console.log(data)
    Properties.update( data._id, {
      $set: {
        name: data.Name,
        address: data.Address,
        description: data.Description,
        image: data.image,
      }
    })
  }
});
