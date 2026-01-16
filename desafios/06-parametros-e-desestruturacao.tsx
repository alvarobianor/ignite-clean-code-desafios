function updateUserRoute(
  body: { name: string; email: string },
  params: { age: number; id: string }
) {
  updateUserController({ email: body.email, name: body.name }, params);
}

function updateUserController(
  data: { name: string; email: string },
  param: { age: number; id: string }
) {
  userRepository.update(data, param);
}

const userRepository = {
  update: (
    { name, email }: { name: string; email: string },
    { age, id }: { age: number; id: string }
  ) => {},
};
