"use server"

import { Resend } from "resend"

const resend = new Resend("re_Ys7Cb4Bs_EuWtYviySYBFQQ6N91HUsyCy")

export async function sendEmail({ name, email, message }: { name: string; email: string; message: string }) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Portafolio Fran MG <onboarding@resend.dev>",
      to: "franmg.yt@gmail.com",
      subject: `Nuevo mensaje de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    })

    if (error) {
      console.error("Error sending email:", error)
      throw new Error("Failed to send email")
    }

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send email")
  }
}
