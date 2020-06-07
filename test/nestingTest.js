const mocha = require('mocha');
const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

describe('Nesting Records', () => {
	
	beforeEach((done) => {
		mongoose.connection.collections.authors.drop(() => {
			done();
		});
	})
	//Create Tests
	it('Creates an author with sub-documents', (done) => {
		var mark = new Author({
			name: 'Mark Haddon',
			books: [{
				title: 'Curious',
				pages: 400
			}]
		});

		mark.save().then(() => {
			Author.findOne({name: 'Mark Haddon'}).then((result) => {
				assert(result.name === 'Mark Haddon');
				assert(result.books.length === 1);
				done();
			});
		});
	});

	it('Adds a book to an author', (done) => {
		var mark = new Author({
			name: 'Mark Haddon',
			books: [{
				title: 'Curious',
				pages: 400
			}]
		});

		mark.save().then(() => {
			Author.findOne({name: 'Mark Haddon'}).then((result) => {
				result.books.push({title: 'What book', pages: 500});
				result.save().then(() => {
					Author.findOne({name: 'Mark Haddon'}).then((record) => {
						assert(record.books.length === 2);
						done();
					});
				});
			});

		});
	});
});