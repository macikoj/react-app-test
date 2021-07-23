import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import classes_card from '../globalCSS/Card.module.css'
import { formActions } from '../store/form-Slice';
const WelcomePage = () => {
    const dispatch = useDispatch();
    const selectedDepartment = useSelector(state => state.form.department)
    const departments = ['XYZ Warszawa, Poland', 'ABC Kraków, Poland', 'RNQ Berlin, Germany']


    const ConditionalLink = ({ children, to, condition }) => (condition && to)
        ? <Link to={to}>{children}</Link>
        : <>{children}</>;


    const selectChangeHandler = (event) => {
        dispatch(formActions.selectDepartment({department:event.target.value}))
    }

    return (
        <body>
            <div className={classes_card.card}>
                <div className={classes_card.content}>
                    <label className="usernameLabel" for="departments">Select your department:
                    </label>
                    <select id="departments" onChange={selectChangeHandler}>
                        <option disabled selected value> -- select an option -- </option>
                        {departments.map((department, index) => <option value={department} key={index}>{department}</option>)}
                    </select>


                </div>
                <div className={classes_card.footer}>
                    <ConditionalLink to="/form" condition={selectedDepartment !== ''}>
                    <button className={classes_card.next} disabled={selectedDepartment === ''}>Go next
                    </button>

                    </ConditionalLink>

                </div>
            </div>
        </body>
    )
}
export default WelcomePage