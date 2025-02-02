import React, { FunctionComponent, useEffect, useState, Fragment } from "react";
import { RouteComponentProps } from "react-router-dom";
import { observer } from "mobx-react";
import { makeStyles, CircularProgress, Card, Typography } from "@material-ui/core";

import { CarpoolStore } from "@carpool/core";
import { CarpoolList, DocumentHead, NotFound } from "../components";

const useStyles = makeStyles(theme => ({
    heading: {
        marginTop: theme.spacing(2),
    },
    loading: {
        display: "flex",
        margin: "auto",
    },
}));

export interface IUserCarpoolsScreenProps extends RouteComponentProps {
    carpoolStore: CarpoolStore;
}

export const UserCarpoolsScreen: FunctionComponent<IUserCarpoolsScreenProps> = observer(props => {
    const classes = useStyles();
    const [notFound, setNotFound] = useState(false);
    const [ready, setReady] = useState(false);
    const { match, carpoolStore } = props;
    const { displayName } = match.params as { displayName: string };

    useEffect(() => {
        const load = async () => {
            try {
                await carpoolStore.loadUserCarpools(displayName);
                setReady(true);
            } catch (error) {
                setNotFound(true);
            }
        };

        load();

        return () => {
            carpoolStore.clearCarpools();
        };
    }, [displayName]);

    if (notFound) {
        return <NotFound />;
    }

    return (
        <Fragment>
            <DocumentHead
                screenTitle={`${displayName} Carpools`}
                description={carpoolStore.carpools
                    .map(
                        carpool =>
                            `${carpool.name} ${carpool.destination} ${new Date(
                                carpool.dateTime
                            ).toLocaleString()}`
                    )
                    .join("\n")}
            />
            {carpoolStore.loading || !ready ? (
                <CircularProgress className={classes.loading} />
            ) : (
                <Card>
                    <Typography variant="h6" align="center" className={classes.heading}>
                        {displayName} Carpools
                    </Typography>
                    <CarpoolList carpools={carpoolStore.carpools} />
                </Card>
            )}
        </Fragment>
    );
});
