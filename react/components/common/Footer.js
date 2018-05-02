import React, { PureComponent } from 'react';
import { Modal } from './Modal';

class Footer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal: null,
    };
  }

  closeModal = () => this.setState({ modal: null });
  closeModalImmediately = () => this.setState({ modal: null });

  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div className="contentWrap">
            <p className="ftr-txt">
              <a
                href="#"
                onClick={() => {
                  this.setState({ modal: 'footer_terms' });
                }}
              >
                Terms and Conditions
              </a>&nbsp;|&nbsp;
              <a
                href="#"
                onClick={() => {
                  this.setState({ modal: 'footer_privacy' });
                }}
              >
                Privacy Policy
              </a>&nbsp;|&nbsp;
              <a
                href="#"
                onClick={() => {
                  this.setState({ modal: 'footer_customer' });
                }}
              >
                Customer Care
              </a>&nbsp;|&nbsp;
              <a
                href="#"
                onClick={() => {
                  this.setState({ modal: 'footer_refund' });
                }}
              >
                Refund Policy
              </a>
            </p>
            {this.props.children}
            <p className="ftr-txt mtop2">
              Copyright 2018 © All Rights Reserved - American Science CBD
            </p>
          </div>
        </div>
        {this.state.modal === 'footer_terms' && (
          <Modal
            onClose={this.closeModal}
            onCloseBtn={this.closeModalImmediately}
          >
            <React.Fragment>Terms and Conditions</React.Fragment>
            <div className="modal-body">
              <script src="/cdn-cgi/apps/head/JoAp3MvqfhhLIuidWRkysQIn8vg.js" />
              <p className="normal title">
                <b>Terms and Conditions</b>
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">
                By placing an order through this website, you agree to the terms
                and conditions set forth below. Please read through these terms
                carefully before placing your order and print a copy for future
                reference. Please also read our Privacy Policy regarding
                personal information provided by you, which is incorporated
                herein by reference.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal title">
                <b>HEALTH DISCLAIMER</b>
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">
                This product is not for use by or sale to persons under the age
                of 18. This product should be used only as directed on the
                label. It should not be used if you are pregnant or nursing.
                Consult with a physician before use if you have a serious
                medical condition or use prescription medications. A Doctor's
                advice should be sought before using this and any supplemental
                dietary product. All trademarks and copyrights are property of
                their respective owners and are not affiliated with nor do they
                endorse this product. These statements have not been evaluated
                by the FDA. This product is not intended to diagnose, treat,
                cure or prevent any disease. Individual weight loss results will
                vary. By using this site, you agree to follow the Privacy Policy
                and all Terms &amp; Conditions printed on this site. Void Where
                Prohibited by Law.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">
                <b>American Science CBD</b>
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">
                <b>Email:</b> support&#64;americansciencecbd.com
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">
                <b>Toll Free Customer Service phone:</b> 1-844-260-1422
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">
                <b>
                  All charges on your bank statement will read: "
                  AmericanScience8442601422"
                </b>
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal title">Prices</p>
              <p className="normal">&nbsp;</p>
              <p className="list">Pack 5 CBD OIL: $195.00</p>
              <p className="normal">&nbsp;</p>
              <p className="list">Pack 3 CBD OIL: $147.00</p>
              <p className="normal">&nbsp;</p>
              <p className="list">Pack 1 CBD OIL: $69.00</p>
              <p className="normal">&nbsp;</p>
              <p className="list">Pack 1 CBD CAPSULES: $77.00</p>
              <p className="normal">&nbsp;</p>
              <p className="list">Pack 1 CBD PAIN RUB BALM: $87.00</p>
              <p className="normal">&nbsp;</p>
              <p className="normal">&nbsp;</p>
              <p className="normal title">
                <b>Shipping</b>
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">
                All products are shipped via United States Postal Service First
                Class Mail. Packages will arrive within 3-5 business days.
                Please be advised that shipments are not sent out on Saturdays,
                Sundays, or any holidays. We do not guarantee arrival dates or
                times.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">&nbsp;</p>
              <p className="normal title">
                <b>Refund Policy</b>
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">
                All defined terms used below shall have the meanings set forth
                in our Terms and Conditions.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal strong">Order Cancellations</p>
              <p className="normal">&nbsp;</p>
              <p className="normal">
                Orders that you submit online are processed immediately and may
                not be cancelled, and you may need to wait until you receive the
                merchandise in order to return it.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal b">Returns</p>
              <p className="normal">
                Once an item of merchandise is delivered to you, you can return
                that item within 30 days of delivery. To be eligible for a
                return, your merchandise must be unused and in the same
                condition that you received it and must be in the original
                packaging.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal b">Shipping</p>
              <p className="normal">
                To initiate a return, please email us at
                support&#64;americansciencecbd.com or contact us by phone (844)
                260-1422 24/7/365 to request a return merchandise authorization
                number. We require an RMA # received from customer support to
                accompany your return.All returned merchandise should be sent to
                us at PO Box 9005, Seal Beach, CA, 90740.You are responsible for
                paying for all shipping costs for your returned item. Shipping
                costs are non-refundable.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal b">Refunds and Exchanges</p>
              <p className="normal">
                After We have received your valid return, We will send you an
                email to notify you that We have received your returned item and
                notify you of the acceptance or rejection of your return. If
                your return is accepted by Us, We will provide one of the
                following within a reasonable time: an exchange of merchandise
                for the item returned, a non-transferable merchandise credit, a
                credit to the payment card or original method of payment used to
                pay for the item, a check, or another remedy that we determine
                in good faith is appropriate in the circumstances.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal b">General</p>
              <p className="normal">
                If you do not comply with any of the above conditions, We
                reserve the right to refuse the return or exchange, or to impose
                different or additional conditions.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">&nbsp;</p>
              <p className="normal title">
                <b>Returns Department</b>
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">
                Please address all returns to American Science Returns and
                include your RMA # in your shipment.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">
                Returns: PO Box 9005, Seal Beach, CA 90740-9005
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal title">
                <b>TERMS OF SERVICE</b>
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">
                This Terms of Service ("TOS") is a legally binding agreement
                made by and between American Science ("we" or "us") and you,
                personally and, if applicable, on behalf of the entity for whom
                you are using this web site (collectively, "you"). This TOS
                governs your use of the website ("Website") and the services we
                offer on the Website ("Services"), so please read it carefully.
                BY ACCESSING OR USING ANY PART OF THE WEBSITE, YOU AGREE THAT
                YOU HAVE READ, UNDERSTAND AND AGREE TO BE BOUND BY THIS TOS. IF
                YOU DO NOT AGREE TO BE SO BOUND, DO NOT ACCESS OR USE THE
                WEBSITE. INTERNET TECHNOLOGY AND THE APPLICABLE LAWS, RULES, AND
                REGULATIONS CHANGE FREQUENTLY. ACCORDINGLY, WE RESERVE THE RIGHT
                TO MAKE CHANGES TO THIS TOS AT ANY TIME. YOUR CONTINUED USE OF
                THE WEBSITE CONSTITUTES ASSENT TO ANY NEW OR MODIFIED PROVISION
                OF THIS TOS THAT MAY BE POSTED ON THE WEB SITE.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">1. Using the Web Site.</p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list">
                (a) Eligibility. Except as expressly provided below, Services
                may only be used by, and Membership is limited to, individuals
                who can form legally binding contracts under applicable law.
                Without limitation, minors are prohibited from becoming Members
                and, except as specifically provided below, using fee-based
                Services. Membership is defined by engaging in a purchase
                agreement with wherein you, the consumer purchase one of the
                products found on the Website.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list">
                (b) Compliance. You must comply with all of the terms and
                conditions of this TOS, the policies referred to below, and all
                applicable laws, regulations and rules when you use the Website.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list">
                (c) License and Restrictions. Subject to the terms and
                conditions of this TOS, you are hereby granted a limited,
                non-exclusive right to use the content and materials on the
                Website in the normal course of your use of the Website. You may
                not use any third party intellectual property without the
                express written permission of the applicable third party, except
                as permitted by law. The Website will retain ownership of its
                intellectual property rights and you may not obtain any rights
                therein by virtue of this TOS or otherwise, except as expressly
                set forth in this TOS. You will have no right to use, copy,
                display, perform, create derivative works from, distribute, have
                distributed, transmit or sublicense from materials or content
                available on the Website, except as expressly set forth in this
                TOS. You may not attempt to reverse engineer any of the
                technology used to provide the Services.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list">
                (d) Prohibited Conduct. In your use of the Website and the
                Services, you may not: (i) infringe any patent, trademark, trade
                secret, copyright, right of publicity or other right of any
                party; (ii) defame, abuse, harass, stalk any individual, or
                disrupt or interfere with the security or use of the Services,
                the Website or any websites linked to the Website; (iii)
                interfere with or damage the Website or Services, including,
                without limitation, through the use of viruses, cancel bots,
                Trojan horses, harmful code, flood pings, denial of service
                attacks, packet or IP spoofing, forged routing or electronic
                mail address information or similar methods or technology; (iv)
                attempt to use another user's account, impersonate another
                person or entity, misrepresent your affiliation with a person or
                entity, including (without limitation) the Website or create or
                use a false identity; (v) attempt to obtain unauthorized access
                to the Website or portions of the Webdsite that are restricted
                from general access; (vi) engage, directly or indirectly, in
                transmission of "spam," chain letters, junk mail or any other
                type of unsolicited solicitation; (vii) collect, manually or
                through an automatic process, information about other users
                without their express consent or other information relating to
                the Web Site or the Services; (viii) use any meta tags or any
                other "hidden text" utilizing the product name, trademarks, or
                product names; (ix) advertise, offer to sell, or sell any goods
                or services, except as expressly permitted by the Website; (x)
                engage in any activity that interferes with any third party's
                ability to use or enjoy the Website or Services; or (xi) assist
                any third party in engaging in any activity prohibited by this
                TOS.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list">
                (e) Other Users. If you become aware of any conduct that
                violates this TOS, We encourage you to contact Customer Service.
                We reserve the right, but will have no obligation, to respond to
                such communications.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">2. Your Content.</p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list">
                (a) License. By posting, storing, or transmitting any content on
                or to the Website, you hereby grant us a perpetual, worldwide,
                non-exclusive, royalty-free, sub-licensable, right and license
                to use, copy, display, perform, create derivative works from,
                distribute, have distributed, transmit and sublicense such
                content in any form, in all media now known or hereinafter
                created, anywhere in the world. You hereby irrevocably waive any
                claims based on moral rights or similar theories, if any.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list">
                (b) Objectionable Content. We do not have the ability to control
                the nature of the user-generated content offered through the
                Website. You are solely responsible for your interactions with
                other users of the Website and any content that you post. We
                will not be liable for any damage or harm resulting from any
                content or your interactions with other users of the Website. We
                reserve the right, but have no obligation, to monitor
                interactions between you and other users of the Website and take
                any other action to restrict access to or the availability of
                any material that we or another user of the Website may consider
                to be obscene, lewd, lascivious, filthy, excessively violent,
                harassing or otherwise objectionable (including, without
                limitation, because it violates this TOS).
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">&nbsp;</p>
              <p className="list">3. Accuracy of Information.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                We attempt to ensure that the information on the Website is
                complete and accurate; however, this information may contain
                typographical errors, pricing errors, and other errors or
                inaccuracies. We assume no responsibility for such errors and
                omissions, and reserve the right to: (i) revoke any offer stated
                on the Website; (ii) correct any errors, inaccuracies or
                omissions; and (iii) make changes to prices, content,
                promotions, product descriptions or specifications, or other
                information on the Website.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">&nbsp;</p>
              <p className="list">4. Sales Tax.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                If you purchase any products available on the Website
                ("Products"), you will be responsible for paying any applicable
                sales tax indicated on the Website.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">&nbsp;</p>
              <p className="list">5. Fraud.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                We reserve the right, but undertake no obligation, to actively
                report and prosecute actual and suspected credit card fraud. We
                may, in our discretion, require further authorization from you
                such as a telephone confirmation of your order and other
                information. We reserve the right to cancel, delay, refuse to
                ship, or recall from the shipper any order if fraud is
                suspected. We capture certain information during the order
                process, including time, date, IP address, and other information
                that will be used to locate and identify individuals committing
                fraud. If any Website order is suspected to be fraudulent, we
                reserve the right, but undertake no obligation, to submit all
                records, with or without a subpoena, to all law enforcement
                agencies and to the credit card company for fraud investigation.
                We reserve the right to cooperate with authorities to prosecute
                offenders to the fullest extent of the law.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">&nbsp;</p>
              <p className="list">6. Intellectual Property Rights.</p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list">
                (a) Copyright. All materials on the Website, including without
                limitation, the logos, design, text, graphics, other files, and
                the selection and arrangement thereof are either owned by us or
                are the property of our suppliers or licensors or other
                companies. You may not use such materials without permission.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list">
                (b) Trademarks. American Science CBD is a trade name we own. The
                related design marks, and other trademarks on the Website are
                owned by us. Page headers, custom graphics, button icons and
                scripts are trademarks or trade dress we own. You may not use
                any of these trademarks, trade dress, or trade names without our
                express written permission.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">7. Third Party Websites.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                AmericanScienceCBD.com may contain links to other websites on
                the Internet that are owned and operated by third parties. We do
                not control the information, products or services available on
                these third party websites. The inclusion of any link does not
                imply our endorsement of the applicable website or any
                association with the website's operators. Because we have no
                control over such websites and resources, you agree that we are
                not responsible or liable for the availability or the operation
                of such external websites, for any material located on or
                available from any such websites or for the protection of your
                data privacy by third parties. Any dealings with, or
                participation in promotions offered by, advertisers on the
                Website, including the payment and delivery of related goods or
                services, and any other terms, conditions, warranties or
                representations associated with such dealings or promotions, are
                solely between you and the applicable advertiser or other third
                party. You further agree that we shall not be responsible or
                liable, directly or indirectly, for any loss or damage caused by
                the use of or reliance on any such material available on or
                through any such site or any such dealings or promotions.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">8. Linking and Framing.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                You may not deep link to portions of the Website, or frame,
                inline link, or similarly display any of our property,
                including, without limitation, the Website. You may not use any
                of our logos or other trademarks as part of a link without
                express written permission.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">9. Comments.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                All comments, feedback, suggestions, ideas, and other
                submissions that you disclose, submit or offer to us in
                connection with your use of the Website will become our
                exclusive property. Such disclosure, submission or offer of any
                Comments shall constitute an assignment to us of all worldwide
                right, title and interest in all patent, copyright, trademark,
                and all other intellectual property and other rights whatsoever
                in and to the Comments and a waiver of any claim based on moral
                rights, unfair competition, breach of implied contract, breach
                of confidentiality, and any other legal theory. You will, at our
                cost, execute any documents to affect, record, or perfect such
                assignment. Thus, we will own exclusively all such right, title
                and interest and shall not be limited in any way in the use,
                commercial or otherwise, of any Comments. You should not submit
                any Comments to us if you do not wish to assign such rights to
                us. We are and will be under no obligation: (i) to maintain any
                Comments in confidence; (ii) to pay to you or any third party
                any compensation for any Comments; or (iii) to respond to any
                Comments. You are and shall remain solely responsible for the
                content of any Comments you make.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">10. Indemnification.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                You agree to defend, indemnify and hold the Website, and its
                subsidiaries, affiliates, and their directors, officers, agents,
                members, shareholders, co-branders or other partners, employees,
                and Ad Partners harmless from any liabilities, losses, actions,
                damages, claims or demands, including reasonable attorneys'
                fees, costs and expenses, made by any third party directly or
                indirectly relating to or arising out of (a) content you provide
                to the Website or otherwise transmit or obtain through the
                Service, (b) your use of the Service, (c) your connection to the
                Service, (d) your violation of this Agreement, (e) your
                violation of any rights of another or (f) your failure to
                perform your obligations hereunder. If you are obligated to
                provide indemnification pursuant to this provision, we may, in
                our sole and absolute discretion, control the disposition of any
                Claim at your sole cost and expense. Without limitation of the
                foregoing, you may not settle, compromise, or in any other
                manner dispose of any Claim without our consent.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                11. DISCLAIMERS, EXCLUSIONS AND LIMITATIONS.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list">
                (a) DISCLAIMER OF WARRANTIES. WE PROVIDE THE WEBSITE, THE
                PRODUCTS, AND SERVICES ON AN "AS IS" AND "AS AVAILABLE" BASIS.
                WE DO NOT REPRESENT OR WARRANT THAT THE PRODUCTS, THE WEBSITE,
                THE SERVICES, ITS USE, ANY INFORMATION ON IT: (I) WILL BE
                UNINTERRUPTED OR SECURE, (II) WILL BE FREE OF DEFECTS,
                INACCURACIES OR ERRORS, (III) WILL MEET YOUR REQUIREMENTS, OR
                (IV) WILL OPERATE IN THE CONFIGURATION OR WITH OTHER HARDWARE OR
                SOFTWARE YOU USE. WE MAKE NO WARRANTIES OTHER THAN THOSE MADE
                EXPRESSLY IN THIS TOS, AND HEREBY DISCLAIM ANY AND ALL IMPLIED
                WARRANTIES, INCLUDING WITHOUT LIMITATION, WARRANTIES OF FITNESS
                FOR A PARTICULAR PURPOSE, MERCHANTABILITY AND NON-INFRINGEMENT.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list">
                (b) DISCLAIMER OF FORWARD-LOOKING STATEMENTS. THIS WEBSITE MAY
                CONTAIN FORWARD-LOOKING STATEMENTS THAT REFLECT OUR CURRENT
                EXPECTATION REGARDING FUTURE EVENTS AND BUSINESS DEVELOPMENT.
                THE FORWARD-LOOKING STATEMENTS INVOLVE RISKS AND UNCERTAINTIES.
                ACTUAL DEVELOPMENTS OR RESULTS COULD DIFFER MATERIALLY FROM
                THOSE PROJECTED AND DEPEND ON A NUMBER OF FACTORS, SOME OF WHICH
                ARE OUTSIDE OUR CONTROL.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list">
                (c) HEALTH RELATED INFORMATION. WE PROVIDE INFORMATION ON THE
                WEB SITE FOR INFORMATIONAL PURPOSES ONLY. IT IS NOT MEANT AS A
                SUBSTITUTE FOR THE ADVICE OF A DOCTOR OR OTHER HEALTH CARE
                PROFESSIONAL. YOU SHOULD NOT USE THE INFORMATION AVAILABLE ON OR
                THROUGH THE WEB SITE FOR DIAGNOSING OR TREATING A MEDICAL
                CONDITION. YOU SHOULD CAREFULLY READ ALL PRODUCT INSTRUCTIONS
                PRIOR TO USE.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list">
                (d) PRODUCTS. ALL PRODUCTS ARE SUBJECT ONLY TO ANY APPLICABLE
                WARRANTIES OF THEIR RESPECTIVE MANUFACTURERS, DISTRIBUTORS, AND
                SUPPLIERS, IF ANY, PROVIDED IN THE PRODUCT PACKAGING. TO THE
                FULLEST EXTENT PERMISSIBLE BY APPLICABLE LAW, WE HEREBY DISCLAIM
                ALL WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING
                WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF MERCHANTABILITY,
                NON- INFRINGEMENT, OR FITNESS FOR A PARTICULAR PURPOSE. WITHOUT
                LIMITING THE GENERALITY OF THE FOREGOING, WE HEREBY EXPRESSLY
                DISCLAIM ALL LIABILITY FOR PRODUCT DEFECT OR FAILURE CLAIMS THAT
                ARE DUE TO NORMAL WEAR, PRODUCT MISUSE, ABUSE, PRODUCT
                MODIFICATION, IMPROPER PRODUCT SELECTION, NON-COMPLIANCE WITH
                ANY CODES, OR MISAPPROPRIATION
              </p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list">
                (e) EXCLUSION OF DAMAGES. WE WILL NOT BE LIABLE TO YOU OR ANY
                THIRD PARTY FOR ANY CONSEQUENTIAL, INCIDENTAL, INDIRECT,
                PUNITIVE OR SPECIAL DAMAGES (INCLUDING, WITHOUT LIMITATION,
                DAMAGES RELATING TO LOST PROFITS, LOST DATA OR LOSS OF GOODWILL)
                ARISING OUT OF, RELATING TO OR CONNECTED WITH THE USE OF THE WEB
                SITE OR PRODUCTS, REGARDLESS OF THE CAUSE OF ACTION ON WHICH
                THEY ARE BASED, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
                DAMAGES OCCURRING. (f) LIMITATION OF LIABILITY. IN NO EVENT WILL
                OUR AGGREGATE LIABILITY ARISING FROM, RELATING TO, OR IN
                CONNECTION WITH THIS TOS (INCLUDING, WITHOUT LIMITATION, CLAIMS
                RELATING TO THE WEB SITE, OR THE PRODUCTS) EXCEED THE GREATER OF
                $100 OR THE AMOUNT THAT YOU PAID FOR THE PRODUCTS.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">12. Force Majeure.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                You acknowledge and understand that if the Website is unable to
                provide the Products as a result of a force majeure event the
                Website will not be in breach of any of its obligations towards
                You under these Terms of Service. A force majeure event means
                any event beyond the control of the Website. THE WEBSITE SHALL
                NOT HAVE ANY LIABILITY TO YOU WHETHER IN CONTRACT, WARRANTY,
                TORT (INCLUDING NEGLIGENCE), OR ANY OTHER FORM OF LIABILITY FOR
                FAILING TO PERFORM ITS OBLIGATIONS UNDER THIS AGREEMENT TO THE
                EXTENT THAT SUCH FAILURE IS AS A RESULT OF A FORCE MAJEURE
                EVENT.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">13. Domestic Use; Export Restriction.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                We control the Website from our offices within the United States
                of America. We make no representation that the Website or its
                content (including, without limitation, any products or services
                available on or through the Website) are appropriate or
                available for use in other locations. Users who access the
                Website from outside the United States of America do so on their
                own initiative and must bear all responsibility for compliance
                with local laws, if applicable. Further, the United States
                export control laws prohibit the export of certain technical
                data and software to certain territories. No content from the
                Website may be downloaded in violation of United States law.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">14. Arbitration.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                All disputes arising out of or relating to this TOS (including
                its formation, performance or alleged breach) or your use of the
                Website will be exclusively resolved under confidential binding
                arbitration held in WY before and in accordance with the Rules
                of the American Arbitration Association. The arbitrator's award
                will be binding and may be entered as a judgment in any court of
                competent jurisdiction. To the fullest extent permitted by
                applicable law, no arbitration under this TOS will be joined to
                an arbitration involving any other party subject to this TOS,
                whether through class arbitration proceedings or otherwise.
                Notwithstanding the foregoing, we will have the right to seek
                injunctive or other equitable relief in state or federal court
                located in our home state to enforce this TOS or prevent an
                infringement of a third party's rights. In the event equitable
                relief is sought, each party hereby irrevocably submits to the
                personal jurisdiction of such court.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">15. Waiver of Class Action Rights.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                BY ENTERING INTO THIS TOS, YOU HEREBY IRREVOCABLY WAIVE ANY
                RIGHT YOU MAY HAVE TO JOIN CLAIMS WITH THOSE OF OTHERS IN THE
                FORM OF A CLASS ACTION OR SIMILAR PROCEDURAL DEVICE. ANY CLAIMS
                ARISING OUT OF, RELATING TO, OR CONNECTED WITH THIS TOS MUST BE
                ASSERTED INDIVIDUALLY.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">16. Limitation of Actions.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                You acknowledge and agree that, regardless of any statute or law
                to the contrary, any claim or cause of action you may have
                arising out of, relating to, or connected with your use of the
                Website, must be filed within one calendar year after such claim
                or cause of action arises, or forever be barred.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">17. Modification of Terms of Service.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                We reserve the right to change or modify these Terms of Use at
                any time and your continued use of this site will be conditioned
                upon the Terms of Use in force at the time of your use. You can
                always check the most current version of the Terms of Use at
                this page.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">18. Termination.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                We will have the right to terminate your access to the Website
                if we reasonably believe you have breached any of the terms and
                conditions of this TOS. Following termination, you will not be
                permitted to use the Website and we may, in our discretion,
                cancel any outstanding Product Orders. If your access to the
                Website is terminated, we reserve the right to exercise whatever
                means we deem necessary to prevent unauthorized access to the
                Website, including, but not limited to, technological barriers,
                IP mapping, and direct contact with your Internet Service
                Provider. This TOS will survive indefinitely unless and until we
                choose to terminate it, regardless of whether any account you
                open is terminated by you or us or if you have the right to
                access or use the Website.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">19. Left Intentionally Blank</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                20. This TOS contains the entire understanding between you and
                us regarding the use of the Web Site, and supersedes all prior
                and contemporaneous agreements and understandings between you
                and us relating thereto.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">21. Additional Terms.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                This TOS will be binding upon each party hereto and its
                successors and permitted assigns, and governed by and construed
                in accordance with the laws of the State of Arizona without
                regard for conflict of law principles. This TOS and all of your
                rights and obligations under them may not be assignable or
                transferable by you without our prior written consent. No
                failure or delay by a party in exercising any right, power or
                privilege under this TOS will operate as a waiver thereof, nor
                will any single or partial exercise of any right, power or
                privilege preclude any other or further exercise thereof or the
                exercise of any other right, power, or privilege under this TOS.
                You are an independent contractor, and no agency, partnership,
                joint venture, or employee-employer relationship is intended or
                created by this TOS. The invalidity or unenforceability of any
                provision of this TOS will not affect the validity or
                enforceability of any other provision of this TOS, all of which
                will remain in full force and effect.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">22. Representations.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">You hereby represent and warrant that:</p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list">
                (1) You are age eighteen (18) or older.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list">
                (2) You have read this Agreement and thoroughly understand the
                terms contained.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="text-center">
                <b>Email:</b> support&#64;americansciencecbd.com
              </p>
              <p className="normal">&nbsp;</p>
              <p className="text-center">
                <b>Toll Free Customer Service phone:</b> 1-844-260-1422
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">&nbsp;</p>
              <p className="normal">&nbsp;</p>
            </div>
          </Modal>
        )}
        {this.state.modal === 'footer_privacy' && (
          <Modal
            onClose={this.closeModal}
            onCloseBtn={this.closeModalImmediately}
          >
            <React.Fragment>Privacy Policy</React.Fragment>
            <div className="modal-body">
              <script src="/cdn-cgi/apps/head/JoAp3MvqfhhLIuidWRkysQIn8vg.js" />
              <p className="normal title">
                <b>PRIVACY POLICY</b>
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">
                THIS WEBSITE AND ALL ASSOCIATED CONTENT AND PRODUCTS ARE OWNED
                BY:
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">
                <b>American Science CBD</b>
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">
                This Privacy Policy governs your use of this Website and any
                content, products or services made available from or through
                this website including any sub domains thereof (“Website”). The
                Website is made available for American Science CBD (Hereinafter
                referred to as “Company”). By visiting this Website and
                requesting information, products or services offered on or
                through this Website, you agree to the terms of this Privacy
                Policy, as they may be amended from time to time. As Company
                updates or expands its Website, services or products, this
                Privacy Policy may change and the changes are effective upon
                posting. Please check back frequently for updates as it is your
                sole responsibility to be aware of changes. Company does not
                provide notice of changes in any manner other than by posting
                the changes at this Website. This Privacy Policy is incorporated
                into, and part of, the Website Terms and Conditions which govern
                your use of this Website in general. This Website is intended
                for users who are located in the United States of America. The
                Privacy Policy shall be interpreted under the laws of the United
                States.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">PURPOSE OF THE PRIVACY POLICY</p>
              <p className="normal">&nbsp;</p>
              <p className="normal">
                This Policy describes the information collection, use, and
                dissemination practices of Company, its parent, subsidiaries and
                registered d/b/a companies (Collectively Referred herein after
                as “Company”) and all related websites owned or registered to
                Company. It governs Company’s right to collect, use, store and
                disclose information provided by You on (a) this Website, (b)
                Company’s other Websites, (c) on various Third Party websites,
                and (d) Company's other information collection and distribution
                practices, including the acquisition of your information from
                and to Third Parties. Company is not responsible for the
                information collection or privacy practices of third party
                websites or applications which company does not own or control.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">COLLECTION OF INFORMATION.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">1.1. User Direct Information.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                Each time you provide or transmit information via the Website,
                Company may obtain and collect personal information about you,
                including, but not limited to, your name, email address, mailing
                address, and telephone or cell phone number (collectively
                referred to as "Personal Information").
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">1.2. Survey Information</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                Company may collect Personal Information from you when you
                voluntarily complete a Company survey, order form, or a
                registration page either online by using the internet or offline
                by providing this information through the mail, in person or
                using a telephone. This information may be collected by surveys,
                order forms, or registration pages operated by third parties.
                This method of collection is collectively known as a “Survey”.
                In such Surveys, Company or a third party may ask you to provide
                Personal Information including your name, email address, mailing
                address, zip code, telephone numbers (including cell phone
                numbers and carriers), birth date, gender, salary range,
                education and marital status, occupation, and such other
                information as may be requested from time to time. Company may
                also collect such information concerning you from another source
                and uses that information in combination with information
                provided from the Website or Surveys. Completing the Surveys is
                completely voluntary, and you are under no obligation to provide
                Survey Information to Company or a third party.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">1.3. Third Party Information.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                Company may collect Personal Information from you when you
                provide information to a third party and Company subsequently
                acquires or uses the information provided by the third party.
                Such information may include, but is not limited to, your name,
                email address, street address, zip code, telephone numbers
                (including cell phone numbers and carriers), birth date, gender,
                salary range, education and marital status, occupation, industry
                of employment, personal and online interests, and such other
                information you may have provided to the third party. When
                acquiring this information, Company seeks assurances from the
                third party that you agreed to provide and have such information
                acquired by Company. If you did not give express permission, or
                you would like to remove your permission, you may suppress all
                of your information by sending notification to us at
                support&#64;americansciencecbd.com
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                1.4. Other Methods of Collecting Personal Information.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                Other occasions when Company obtains information from you
                include: (1) when you claim a prize or seek to redeem an offer
                by Company or by a third party; (2) when you request assistance
                through Company’s customer service department; and (3) when you
                voluntarily subscribe to a Company service or newsletter.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                1.5. Cookies, Web Beacons, and Other Info Collected Using
                Technology.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                Company currently uses cookie and web beacon technology to
                associate certain Internet-related information about you with
                information about you in its database. Additionally, Company may
                use other new and evolving sources of information in the future.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list">a. Cookies.</p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list-content">
                “Cookies” are a feature in your browser software. If enabled, we
                may write cookies that may store small amounts of data on your
                computer about your visit to any of the pages of this Site.
                Cookies assist us in tracking which of our features appeal the
                most to you and what content you may have viewed on past visits.
                When you visit this site again, cookies can enable us to
                customize our content according to your preferences. We may use
                cookies to: keep track of the number of return visits to this
                site; accumulate and report aggregate, statistical information
                on website usage; deliver specific content to you based on your
                interests or past viewing history; save your password for ease
                of access to our Site. You can disable cookies, although the
                Site may not function properly for you. Your browser preferences
                can be modified to accept or reject all cookies, or request a
                notification when a cookie is set. You may read more about
                cookies at https://cookiecentral.com. In order to use all of the
                features and functionality of Company’s websites, you need to
                accept cookies.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list">b. Web Beacons.</p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list-content">
                A web beacon is a programming code that can be used to display
                an image on a web page, but can also be used to transfer your
                unique user identification to a database and associate you with
                previously acquired information about an individual in a
                database. This allows Company to track certain websites you
                visit. Web beacons are used to track online behavioral habits
                for marketing purposes to determine products or services you may
                be interested in. In addition to using web beacons on web pages,
                Company also uses web beacons in email messages sent to
                individuals listed in Company’s database.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list">c. IP Addresses.</p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list-content">
                Company automatically tracks certain information based upon your
                behavior on the site. We may use this information to do internal
                research on our users' demographics, interests, and behavior to
                better understand, protect and serve you and our community. This
                information may include the URL that you just came from (whether
                this URL is on the site or not), which URL you next go to
                (whether this URL is on the site or not), your computer browser
                information, and your IP address. Your Internet Protocol ("IP")
                is a unique Internet "address" which is assigned to you by your
                Internet Service Provider ("ISP"). For local area network
                ("LAN"), DSL, or cable modem users, an IP address may be
                permanently assigned to a particular computer. IP addresses are
                automatically logged by Web servers, collecting information
                about a user's traffic patterns. While the IP address does not
                identify an individual by name, it may, with the cooperation of
                the ISP, be used to locate and identify an individual using the
                Web. Your IP address can, however, reveal what geographic area
                you are connecting from, or which ISP you are using. Finally,
                other websites you visit have IP addresses, and we may collect
                the IP addresses of those websites and their pages.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list">d. Computer Profiles.</p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list-content">
                Company may also collect and accumulate other anonymous data
                which will help us understand and analyze the Internet
                experience of our visitors. For instance, Company may accumulate
                visitor data relating to referring domain names, the type of
                browsers used, operating system software, screen resolutions,
                color capabilities, browser plug-ins, language settings, cookie
                preferences, search engine keywords and JavaScript enablement.
                When you provide us with Personal Identification Information, we
                are able to use such visitor data to identify you.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list">e. Data Analysis.</p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list-content">
                Data Analysis technology may be employed from time to time if
                used by a Client of Company.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list">f. New Technology</p>
              <p className="normal">&nbsp;</p>
              <p className="sub-list-content">
                The use of technology on the Internet, including cookies and web
                beacons, is rapidly developing. As a result, Company strongly
                encourages individuals to revisit this policy for any updates
                regarding its use of new technology.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                1.6. No Information Collected from Children.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                Company will never knowingly collect any Personal Information
                about children under the age of 18. If Company obtains actual
                knowledge that it has collected Personal Information about a
                child under the age of 18, that information will be immediately
                deleted from its database. Because it does not collect such
                information, Company has no such information to use or to
                disclose to third parties.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                1.7. Credit Card Information and Bank Account Information.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                Company may, in certain instances, collect credit card numbers,
                bank account information and related information when an
                individual places an order on Company’s Website. When the credit
                card or bank account information is submitted to Company, such
                information is encrypted and is protected with SSL encryption
                software. Company will use the credit card information or bank
                account information for purposes of processing and completing
                the transaction you requested on the Website, company will not
                sell, share, or otherwise disclose this information in any
                manner other than to fulfill an order placed on this website.
                Such information is stored on a server which has firewall
                protection and password coded. Company limits access to this
                information to authorized personnel only.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">2. USE OF PERSONAL INFORMATION.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">2.1. General Use.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                The following paragraphs describe how Company currently uses
                Personal Information, but Company may change or broaden its use
                at any time. As noted below, Company may update this policy from
                time to time. Company may use Personal Information to provide
                promotional offers to individuals by means of email advertising,
                telephone marketing, direct mail marketing, mobile marketing,
                online banner advertising, and package stuffers, among other
                possible uses.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                2.2. Company may maintain separate email lists for different
                purposes. If email recipients wish to end their email
                subscription from a particular list, they need to follow the
                instructions at the end of each email message to unsubscribe
                from the particular list. You may always unsubscribe from
                receiving email communications from us. To unsubscribe from all
                Company emails, email customer service with subject line
                "UNSUBSCRIBE EMAILS" and submit the e-mail address that you
                desire to be removed from our database at
                support&#64;americansciencecbd.com, or contact us at
                1-888-262-9731, Monday to Friday, 08:00 AM – 07:00 PM PST,
                Closed on holidays Company's unsubscribe process impacts only
                the future delivery of electronic mailings disseminated by
                Company on its own behalf.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">2.3. Targeted Advertising.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                Company may use Personal Information to target advertising to an
                individual. When an individual is using the Internet, Company
                uses Technology Information to associate an individual with that
                person's Personal Information, and Company attempts to show
                advertising for products and services in which the person has
                expressed an interest in the Surveys, indicated an interest by
                means of Technology Information, and otherwise. Company may, at
                its discretion, target advertising by using email, direct mail,
                telephones, cell phones, and other means of communication to
                provide promotional offers.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">2.4. Wireless Addresses.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                If the e-mail address you provide to Company is a wireless
                e-mail address, you agree to receive messages at such address
                from Company (unless and until you have elected not to receive
                such messages by following the instructions in the unsubscribe
                portion of this policy). You understand that your wireless
                carrier's standard rates apply to these messages. You represent
                that you are the owner or authorized user of the wireless device
                on which messages will be received, and that you are authorized
                to approve the applicable charges.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">2.5. Short Message Service.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                Company may make available a service through which you can
                receive messages on your wireless device via short message
                service (“SMS Service”). Data obtained from you in connection
                with this SMS service may include your name, address, cell phone
                number, your provider's name, and the date, time, and content of
                your messages. You represent that you are 18 years of age and
                the owner or authorized user of the wireless device on which
                messages will be received, and that you are authorized to
                approve the applicable charges. In addition to any fee of which
                you are notified your provider's standard messaging rates apply
                to our confirmation and all subsequent SMS correspondence. All
                charges are billed by and payable to your mobile service
                provider. Company will not be liable for any delays in the
                receipt of any SMS messages, as delivery is subject to effective
                transmission from your network operator. SMS message services
                are provided on an AS IS basis. Company may also obtain the
                date, time and content of your messages in the course of your
                use of the SMS Service. We will use the information we obtain in
                connection with our SMS Service in accordance with this Privacy
                Policy. If fees are charged to your wireless account invoice, we
                may provide your carrier with your applicable information in
                connection therewith. Your wireless carrier and other service
                providers may also collect data about your wireless device
                usage, and their practices are governed by their own policies.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                You acknowledge and agree that the SMS Service is provided via
                wireless systems which use radios (and other means) to transmit
                communications over complex networks. We do not guarantee that
                your use of the SMS Service will be private or secure, and we
                are not liable to you for any lack of privacy or security you
                may experience. You are fully responsible for taking precautions
                and providing security measures best suited for your situation
                and intended use of the SMS Service. We may also access the
                content of your account and wireless account with your carrier
                for the purpose of identifying and resolving technical problems
                and service-related complaints.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                You may remove your information from Company’s database. You may
                remove your information by sending your request in writing via
                email to support&#64;americansciencecbd.com or by sending
                "STOP", "END", "QUIT" to the SMS text message you have received.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">2.6. Use of Technology Information.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                Company may use Technology Information (1) to match a person's
                Personal Information and Third Party List Information to other
                categories of Personal Information to make and improve profiles
                of individuals, (2) to track a person's online browsing habits
                on the Internet, (3) to determine which areas of Company's
                websites are most frequently visited. This information helps
                Company to better understand the online habits of individuals so
                that Company can target advertising and promotions to them.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">2.7. Profiles of Individuals.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                Company may use Personal Information to make a profile of an
                individual. A profile can be created by combining Survey
                Information and Third Party List Information with other sources
                of Personal Information such as information obtained from public
                databases.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">2.8. Storage of Personal Information.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                Company stores the Personal Information in a database on its
                computers. Company computers have security measures (such as a
                firewall and password protections) in place to protect against
                the loss, misuse, and alteration of the information under
                Company’s control. Notwithstanding such measures, Company cannot
                guarantee that its security measures will prevent its computers
                from being illegally accessed, and the Personal Information on
                them stolen or altered.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">2.9. Other Use of Personal Information.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                Company may use your Personal Information in the following ways:
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">2.10. Data Summary.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                Company may sell or transfer non-individualized information,
                such as summary or aggregated anonymous information about all
                persons or sub-groups of persons.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">3. SERVICE PROVIDERS.</p>
              <p className="normal">&nbsp;</p>
              <p className="normal">
                Company may use third parties to help operate our Website and
                deliver products and services.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">3.1. Aggregate Statistics.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                Company may disclose aggregate statistics regarding user
                behavior as a measure of interest in, and use of, our Website
                and e-mails to third parties in the form of aggregate data, such
                as overall patterns or demographic reports that do not describe
                or identify any individual user.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">3.2. Complying with Legal Process.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                Company will use or disclose your Personal Information in
                response to subpoenas, court orders, warrants, or legal process,
                or to otherwise establish or exercise our legal rights or defend
                against legal claims or in the event you violate or breach an
                agreement with Company. Company will use and disclose your
                Personal Information if we believe you will harm the property or
                rights of Company, its owners, or those of Company's other
                customers. Finally, we will use or disclose your Personal
                Information if we believe it is necessary to share information
                in order to investigate, prevent, or take action regarding
                illegal activities, suspected fraud, situations involving
                potential threats to the physical safety of any person,
                violations of Company’s acceptable use policy, or as otherwise
                required by law when responding to subpoenas, court orders and
                other legal processes.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">3.3. Order Fulfillment.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                Company will transfer your Personal Information to third parties
                when necessary to provide fulfillment of a product or service
                that you order from such third party while using Company’s
                websites or when responding to offers provided by Company.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">3.4. Foreign use of the Website.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                To the extent that you are accessing the Website while domiciled
                outside of the United States, you acknowledge that the Personal
                Information you are providing Company is collected and stored in
                the United States and therefore consent to the transfer of
                information to and storage of the information outside of your
                domiciled country and in the United States.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">3.5. California User Consumer Rights.</p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                In accordance with California Civil Code Sec. 1789.3, California
                resident users are entitled to know that they may file
                grievances and complaints with California Department of Consumer
                Affairs, 400 R Street, STE 1080, Sacramento, CA 95814; or by
                phone at 888-406-0993; or by email to dca&#64;dca.ca.gov. For
                more information about protecting your privacy, you may wish to
                visit: https://www.ftc.gov. If you have questions about this
                policy, please contact us at support&#64;americansciencecbd.com.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">&nbsp;</p>
            </div>
          </Modal>
        )}
        {this.state.modal === 'footer_customer' && (
          <Modal
            onClose={this.closeModal}
            onCloseBtn={this.closeModalImmediately}
          >
            <React.Fragment>Customer Care</React.Fragment>
            <div className="modal-body">
              <p className="normal title">
                <b>Customer Care</b>
              </p>
              <p className="normal">&nbsp;</p>
              <p className="normal">
                American Science is available 24/7 365 to support our customers.
                If you need assistance with anything related to your order or
                are interested in buying from us, please reach out to us through
                our convenient solutions.
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                <b>Customer Service:</b> (888) 313-8529<br />
                <b>Email:</b> support&#64;americansciencecbd.com
              </p>
              <p className="normal">&nbsp;</p>
              <p className="list">
                American Science CBD<br />
                Corporate: American Science CBD<br />
                Returns: PO Box 9005, Seal Beach, CA 90740-9005
              </p>
              <p className="normal">&nbsp;</p>
            </div>
          </Modal>
        )}
        {this.state.modal === 'footer_refund' && (
          <Modal onClose={this.closeModal}>
            <React.Fragment>Refund Policy</React.Fragment>
            <div className="modal-body">
              <script src="/cdn-cgi/apps/head/JoAp3MvqfhhLIuidWRkysQIn8vg.js" />
              <p className="normal title">
                <b>Refund Policy</b>
              </p>
              <div className="pmtop1">
                <p className="normal">
                  All defined terms used below shall have the meanings set forth
                  in our
                  <a
                    href="#"
                    className="popup-link underline"
                    data-html="terms-and-conditions"
                  >
                    Terms and Conditions
                  </a>.
                </p>
                <p className="normal mtop1 strong">Order Cancellations</p>
                <p className="normal mtop1">
                  Orders that you submit online are processed immediately and
                  may not be cancelled, and you may need to wait until you
                  receive the merchandise in order to return it.
                </p>
                <p className="normal mtop1 b">Returns</p>
                <p className="normal">
                  Once an item of merchandise is delivered to you, you can
                  return that item within 30 days of delivery. To be eligible
                  for a return, your merchandise must be unused and in the same
                  condition that you received it and must be in the original
                  packaging.
                </p>
                <p className="normal mtop1 b">Shipping</p>
                <p className="normal">
                  To initiate a return, please email us at
                  support&#64;americansciencecbd.com or contact us by phone
                  (844) 260-1422 24/7/365 to request a return merchandise
                  authorization number. We require an RMA # received from
                  customer support to accompany your return.All returned
                  merchandise should be sent to us at PO Box 9005, Seal Beach,
                  CA, 90740.You are responsible for paying for all shipping
                  costs for your returned item. Shipping costs are
                  non-refundable.
                </p>
                <p className="normal b">Refunds and Exchanges</p>
                <p className="normal">
                  After We have received your valid return, We will send you an
                  email to notify you that We have received your returned item
                  and notify you of the acceptance or rejection of your return.
                  If your return is accepted by Us, We will provide one of the
                  following within a reasonable time: an exchange of merchandise
                  for the item returned, a non-transferable merchandise credit,
                  a credit to the payment card or original method of payment
                  used to pay for the item, a check, or another remedy that we
                  determine in good faith is appropriate in the circumstances.
                </p>
                <p className="normal b">General</p>
                <p className="normal">
                  If you do not comply with any of the above conditions, We
                  reserve the right to refuse the return or exchange, or to
                  impose different or additional conditions.
                </p>
                <p className="normal b mtop1">RETURNS DEPARTMENT:</p>
                <p className="normal ">
                  Please address all returns to: American Science Returns and
                  include your RMA # in your shipment.
                </p>
                <p className="normal mtop1">
                  <span className="b">Returns:</span> PO Box 9005, Seal Beach,
                  CA 90740-9005
                </p>
              </div>
              <p className="normal">&nbsp;</p>
            </div>
          </Modal>
        )}
      </React.Fragment>
    );
  }
}
export { Footer };
