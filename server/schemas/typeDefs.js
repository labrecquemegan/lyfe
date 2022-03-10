const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		first_name: String
		last_name: String
		username: String
		email: String
		password: String
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		users: [User]!
		user(userId: ID!): User
		me: User
	}

	type Mutation {
		addUser(
			first_name: String!
			last_name: String!
			username: String!
			email: String!
			password: String!
		): Auth
		login(email: String!, password: String!): Auth
		removeUser: User
	}
`;

module.exports = typeDefs;
