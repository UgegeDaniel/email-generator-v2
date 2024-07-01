function capitalizeName(name) {
    return name.toUpperCase();
}

function getCurrentFormattedDate() {
    const date = new Date();
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
}

const formattedDate = getCurrentFormattedDate();
function formatNumberToMoney(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function generateEmail() {
    const customerName = document.getElementById('customerName').value.trim();
    // const amountDisbursed = formatNumberToMoney(document.getElementById('amountDisbursed').value);
    // const amountToPay = formatNumberToMoney(document.getElementById('amountToPay').value);


    if (customerName === '') {
        alert('Please fill in all fields');
        return;
    }

    const capitalizedCustomerName = capitalizeName(customerName);

    const body = `
    ${formattedDate}
        <br/>
    Dear: <bold style="font-weight: bold">${capitalizedCustomerName}</bold>
    <p>We are aware you were contacted earlier today by our staff to make your outstanding payment and you have refused to make payment or give us a positive response. In light of this, note that we would be expecting your payment today unfailingly or the below implications would be implemented to make sure we recover our funds from you:
    <br/>
    <br/>
    <ol>
    <li style="font-weight: bold">Negative credit (bureau) score.</li>
<li style="font-weight: bold">Decline of future loan request.</li>
 <li style="font-weight: bold">Demand letter/notices will be sent to you.</li>
<li style="font-weight: bold">Account will be assigned to recovery agents, who may in turn visit your home/office for recovery of the outstanding loan.</li>
<li style="font-weight: bold">Legal action may be taken against you for the recovery of the outstanding balance.</li>
    </ol>
    <br/>
   You are expected to regularize your account with us within (24)hours of this notice by making your payment.
    <br/>
    <br/>
     <i bold style="font-weight: bold">
    You can pay into your FairMoney Microfinance bank account, login into the app and click on ‘’repay” and follow the prompt to make payment. We are here to assist you through this process. For any inquiries or assistance, please don't hesitate to call us at +23417001276 or +2341888577, or send an email to help@fairmoney.io.
    </i> 
    <br />
    <br />
    <i> Regards </i>
    </p>`;

    document.getElementById('emailBody').innerHTML = body;
}
