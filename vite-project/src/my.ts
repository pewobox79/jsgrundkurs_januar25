
export const caluculateNumbers=(num:number, num2:number)=>{

    return num + num2
}


export const generateGreeting = (name: string, prefix: "Herr" | "Frau" | "Mr." | "Mrs." = "Herr")=>{

    return `Hallo ${prefix} ${name}`
}

