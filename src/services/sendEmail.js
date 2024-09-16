
import { Resend } from 'resend'
// import { render } from '@react-email/components'
// import Email from '../components/Email'

const resend = new Resend('re_Vnnu5bK7_GtdAoQLRqkeq8RBi8rgfUzEV')
// re_Vnnu5bK7_GtdAoQLRqkeq8RBi8rgfUzEV la por defecto
// re_LthNtevp_Ayx1Yuvt6rgE2AEnFKMrPTyV Mega farma

export const sendEmail = async (to, subject, url) => {
  try {    
    // const emailHtml = render(<Email url={url} />)
    const data = await resend.emails.send({
      // from: 'onboarding@resend.dev',
      from: 'Acme <onboarding@resend.dev>',
      to,
      subject,
      // html: emailHtml,
      // html: '<p>Hola Mundo</p>',
      html: '<strong>It works!</strong>',
      // react: Email({ url: url }),
    })
    console.log(data)
    
    console.log('Correo enviado exitosamente')
  } catch (error) {
    console.error('Error al enviar el correo:', error)
  }
}