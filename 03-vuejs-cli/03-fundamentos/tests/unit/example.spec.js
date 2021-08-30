describe("Example Componet", () => {
  test("Debe de ser mayor a 10", () => {
    // Evaluar
    let value = 9

    // Estimulo
    value = value + 2

    //Observar el resultado
    expect(value).toBeGreaterThan(10)
  })
})
