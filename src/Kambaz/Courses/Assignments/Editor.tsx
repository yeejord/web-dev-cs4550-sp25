import SubmissionType from "./SubmissionType";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your
          Web application running on Netlify. The landing page should include the following:
          Your full name and section Links to each of the lab assigments Link to the Kambaz
          application Links to all relevant source code repositories The Kambaz application 
          should inlcude a link to navigate back to the landing page.
        </textarea>
        <br /><br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="Assignments">Assignments</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="Percentage">Percentage</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <SubmissionType />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right">
                <label htmlFor="wd-assin-assignment">Assign</label>
            </td>
            <td align="left"> 
                <label htmlFor="wd-assign-to">Assign to</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>
          <br />
          <tr>
            <td> </td>
            <td align="left"> 
                <label htmlFor="wd-due-date">Due</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td align="left">
                <input defaultValue="2024-05-13" type="date" id="wd-due-date" /><br/>
            </td>
          </tr>
          <br />
          <tr>
            <td></td>
            <td>
                <table>
                    <tr>
                        <td align="left"> 
                            <label htmlFor="wd-available-from">Available From</label>
                        </td>
                        <td>
                            <label htmlFor="wd-available-until">Until</label>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            <input defaultValue="2024-05-06" type="date" id="wd-available-from" />
                        </td>
                        <td>
                            <input defaultValue="2024-05-20" type="date" id="wd-available-until" />
                        </td>
                    </tr>
                </table>
            </td>
          </tr>
        </table>
        <hr />
        <table align="right">
            <tr>
                <td align="right">
                    <button>Cancel</button>{" "}
                    <button>Save</button>
                </td>
            </tr>
        </table>
      </div>
  );}
  