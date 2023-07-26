# Pet Adoption with Objection Clinic

The clinic version of this assignment starts with `Part One: Viewing Species` as completed.

Goals:

- See all Pets for a Species on the show page for that Species
- Add a new Pet to a specific Species
- Add serializers for Species and Pets

After adding any new section of code/ new method/ etc, how can we test that it works as intended before moving on?

- Practice implementing small bits of code at a time and check the results frequently
- Use `console.log`'s EVERYWHERE to confirm what variables or data will look like
- DON'T ASSUME
- `console.log` the `error` thrown from the router to see what the error actually is (seeing `500 Internal Server Error` is not really helpful)
- Run queries in the `yarn console` to see better error messages when trying to access data in the database, or add new records
- Test ALL associations you define, in both directions

```no-highlight
createdb pet_adoptions_development
yarn install
yarn run dev
```