export function ResetPasswordEmail(data) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const resetUrl = `${baseUrl}/reset/${data}`;
    return `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f3f4f6; text-align: center;">
        <table width="100%" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td align="center">
              <div style="max-width: 600px; width: 100%; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #1E3A8A;">Reset Your Password</h1>
                <p style="color: #6B7280;">We received a request to reset your password for your account. Please click the button below to set a new password.</p>
                <a href="${resetUrl}" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background-color: #1E3A8A; color: #FFFFFF; text-decoration: none; border-radius: 5px;">
                  Reset Password
                </a>
                <p style="color: #6B7280; margin-top: 20px;">If you didn’t request a password reset, please ignore this email or contact support if you have concerns.</p>
                <p style="color: #6B7280; margin-top: 20px;">This link will expire in 1 hour.</p>
                <div style="margin-top: 30px; color: #6B7280;">
                  <p style="font-size: 12px;">© 2024 Your Crypto Investment Platform. All rights reserved.</p>
                  <p style="font-size: 12px;">Need help? <a href="http://localhost:3000/support" style="color: #1E3A8A; text-decoration: none;">Contact Support</a></p>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    `;
  }
  