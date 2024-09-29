import Link from "next/link";

export  function AccountActivation(data) {// utils/createActivationEmailTemplate.js

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const resetUrl = `${baseUrl}/verification/${data}`;
    return `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f3f4f6; text-align: center;">
        <table width="100%" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td align="center">
              <div style="max-width: 600px; width: 100%; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #4F46E5;">Activate Your Account</h1>
                <p style="color: #6B7280;">Thank you for signing up! Please click the button below to activate your account.</p>
                <a href="${resetUrl}" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background-color: #4F46E5; color: #FFFFFF; text-decoration: none; border-radius: 5px;">
                  Activate Account
                </a>
                <p style="color: #6B7280; margin-top: 20px;">If you didn’t sign up, you can ignore this email.</p>
              </div>
            </td>
          </tr>
        </table>
      </div>
    `;
  }
  

export async function getServerSideProps(context) {
  // Fetch your activation link here or generate it dynamically
  const activationLink = "https://example.com/activate/your-token";

  return {
    props: {
      activationLink,
    },
  };
}
